# DeepSeek API 官方文档调研 (2026-04-24 DeepSeek-V4 更新)

> 调研时间: 2026-05-03
> 来源: https://api-docs.deepseek.com/

---

## 1. base_url
```
https://api.deepseek.com          ← OpenAI 兼容格式（不要加 /v1！）
https://api.deepseek.com/beta     ← Beta 功能（对话前缀续写）
https://api.deepseek.com/anthropic ← Anthropic API 格式
```
Chat 端点: `POST https://api.deepseek.com/chat/completions`
模型列表: `GET https://api.deepseek.com/models`

## 2. 模型 (DeepSeek-V4, 2026-04-24)

| 模型名 | 参数 | 上下文 | 思考模式 | 状态 |
|--------|------|--------|---------|------|
| `deepseek-v4-pro` | 1.6T total / 49B active | 1M | ✅ 默认开启 | ✅ 推荐 |
| `deepseek-v4-flash` | 284B total / 13B active | 1M | ✅ 默认开启 | ✅ 推荐 |
| `deepseek-chat` | → v4-flash 非思考 | 128K | ❌ | ⚠️ 2026/07/24 废弃 |
| `deepseek-reasoner` | → v4-flash 思考 | 128K | ✅ | ⚠️ 2026/07/24 废弃 |

## 3. 思考模式 (Thinking) — V4 默认开启！

**V4 的思考模式默认启用！** 要关闭需要显式传参。

### 参数
```json
{
  "thinking": {"type": "enabled"},   // 或 {"type": "disabled"} 关闭
  "reasoning_effort": "high"         // "high"(默认) | "max"
}
```

### reasoning_effort 等级:
| 值 | 行为 |
|----|------|
| `high` | 默认。标准推理深度 |
| `max` | 最大推理深度（复杂 Agent 场景自动升级） |
| `low` / `medium` | 为兼容性映射到 `high` |
| `xhigh` | 映射到 `max` |

- `thinking` 在 OpenAI SDK 中必须放 `extra_body`
- CoT 输出在 `reasoning_content` 字段

## 4. 支持的参数（分模式）

| 参数 | 非思考模式 | 思考模式 |
|------|-----------|---------|
| `temperature` | ✅ 支持 | ❌ 静默忽略 |
| `top_p` | ✅ 支持 | ❌ 静默忽略 |
| `presence_penalty` | ✅ | ❌ 静默忽略 |
| `frequency_penalty` | ✅ | ❌ 静默忽略 |
| `max_tokens` | ✅ 最大 8K | ✅ 最大 384K |
| `thinking` | ❌ | ✅ (extra_body) |
| `reasoning_effort` | ❌ | ✅ ("high"/"max") |
| `logprobs` | ✅ | ❌ 报错 |
| `stop` | ✅ | ✅ |
| `stream` | ✅ | ✅ |

## 5. 价格
- 输入 (cache hit): $0.028/1M
- 输入 (cache miss): $0.28/1M
- 输出: $0.42/1M

## 6. 功能
- ✅ JSON Mode / Tool Calls
- ✅ Chat Prefix Completion (Beta, /beta endpoint)
- ✅ FIM Completion (Beta, 仅非思考模式)
- ✅ 1M 上下文 (V4)
- ✅ 多轮对话

## 7. 设计要点
- base_url 不要加 /v1
- 思考模式下 temperature/top_p 被静默忽略 → 参数面板需要灰掉并标注
- thinking 默认开启 → 用户可能想关掉
- reasoning_effort 只有 high/max 两档有效
- deepseek-chat/reasoner 将在 2026/07/24 废除 → 我们只用 v4-pro / v4-flash
