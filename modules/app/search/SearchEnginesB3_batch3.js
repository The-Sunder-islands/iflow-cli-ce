var EG_b3 = {},
  eG_b3 = j(() => {
    "use strict";
    function eb(s, start, end) { let i=s.indexOf(start);if(i===-1)return null;i+=start.length;let j=s.indexOf(end,i);return j===-1?null:s.slice(i,j); }
    function st(s) { return s?s.replace(/<[^>]*>/g,'').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim():''; }
    function blk(html,tag,cls,from){var re=new RegExp("<"+tag+'\\s[^>]*class="[^"]*'+cls+'[^"]*"[^>]*>',"i");re.lastIndex=from||0;var m=re.exec(html);if(!m)return null;var d=1,p=re.lastIndex,ot="<"+tag,ct="</"+tag+">";while(d>0&&p<html.length){var no=html.indexOf(ot,p),nc=html.indexOf(ct,p);if(nc===-1)return{html:html.slice(m.index),start:m.index,end:html.length};if(no!==-1&&no<nc){d++;p=no+ot.length}else{d--;p=nc+ct.length}}return{html:html.slice(m.index,p),start:m.index,end:p};}
    function allBlk(html,tag,cls){var blocks=[],pos=0,b;while(pos<html.length){b=blk(html,tag,cls,pos);if(!b)break;blocks.push(b.html);pos=b.end}return blocks;}

    EG_b3.bing_videos = { name:"bing_videos", categories:["videos","web"], shortcut:"biv", paging:!0, safesearch:!0, time_range_support:!0,
      timeMap:{day:1440,week:10080,month:43200,year:525600},
      async request(query,params,sq){
        var first=(sq.pageno-1)*35+1;
        var qp={q:query,async:"content",first:first,count:35};
        if(sq.timeRange&&this.timeMap[sq.timeRange]){qp.form="VRFLTR";qp.qft=" filterui:videoage-lt"+this.timeMap[sq.timeRange];}
        params.url="https://www.bing.com/videos/asyncv2?"+new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp,sq){
        var r=[],h=resp.text,parts=h.split(/<div[^>]*?class="vrhdata"[^>]*?vrhm='/);
        for(var i=1;i<parts.length;i++){
          var jsonStr=parts[i].slice(0,parts[i].indexOf("'")),meta;
          try{meta=JSON.parse(jsonStr);}catch(e){continue;}
          var block=parts[i].slice(0,parts[i].indexOf("</div>")+6);
          var thumbM=block.match(/<img[^>]*class="rms[^"]*"[^>]*data-src-hq="([^"]*)"/i);
          var metaBlock=block.match(/<div[^>]*class="mc_vtvc_meta_block"[^>]*>([\s\S]*?)<\/div>/i);
          var info=metaBlock?st(metaBlock[1]).replace(/\s+-\s+/g," - "):"";
          r.push({url:meta.murl,thumbnail:thumbM?thumbM[1]:null,title:meta.vt||"",content:info,length:meta.du,template:"videos.html"});
        }
        return r;
      },
    };

    EG_b3.boardreader = { name:"boardreader", categories:["general","social media"], shortcut:"br", paging:!0, time_range_support:!0,
      timeRangeMap:{day:"1",week:"7",month:"30",year:"365"},
      async request(query,params,sq){
        var lang=sq.language||"All";
        var args={query:query,page:sq.pageno,language:lang,session_id:""};
        if(sq.timeRange&&this.timeRangeMap[sq.timeRange])args.period=this.timeRangeMap[sq.timeRange];
        params.url="https://boardreader.com/return.php?"+new URLSearchParams(args).toString();
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.SearchResults)return r;
        for(var i=0;i<json.SearchResults.length;i++){
          var item=json.SearchResults[i];
          r.push({title:st(item.Subject||"").replace(/\[\/?Keyword\]/g,""),content:st(item.Text||"").replace(/\[\/?Keyword\]/g,""),url:item.Url||"",publishedDate:item.Published?new Date(item.Published):null,metadata:"Posted by "+(item.Author||"")});
        }
        return r;
      },
    };

    EG_b3.bt4g = { name:"bt4g", categories:["files"], shortcut:"bt4g", paging:!0, time_range_support:!0,
      bt4g_order_by:"relevance",bt4g_category:"all",
      async request(query,params,sq){
        var orderBy=sq.timeRange?"time":this.bt4g_order_by;
        params.url="https://bt4gprx.com/search?q="+encodeURIComponent(query)+"&orderby="+orderBy+"&category="+this.bt4g_category+"&p="+sq.pageno+"&page=rss";
        return params;
      },
      async response(resp,sq){
        var r=[],xml=resp.text,items=xml.split("<item>");
        for(var i=1;i<items.length;i++){
          var item=items[i],title=eb(item,"<title>","</title>"),guid=eb(item,"<guid>","</guid>"),link=eb(item,"<link>","</link>"),desc=eb(item,"<description>","</description>"),pubDate=eb(item,"<pubDate>","</pubDate>");
          if(!title||!guid)continue;
          var descParts=desc?desc.split("<br>"):[],filesize=descParts[1]||"";
          r.push({url:guid,title:st(title),magnetlink:link||"",seed:"N/A",leech:"N/A",filesize:filesize,publishedDate:pubDate?new Date(pubDate):null,template:"torrent.html"});
        }
        return r;
      },
    };

    EG_b3.btdigg = { name:"btdigg", categories:["files"], shortcut:"btd", paging:!0,
          useRenderer: !0,
      async request(query,params,sq){
        params.url="https://btdig.com/search?q="+encodeURIComponent(query)+"&p="+(sq.pageno-1);
        return params;
      },
      async response(resp,sq){
        var r=[],h=resp.text,blocks=allBlk(h,"div","one_result");
        for(var i=0;i<blocks.length;i++){
          var bl=blocks[i];
          var linkM=bl.match(/<div[^>]*class="torrent_name"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
          if(!linkM)continue;
          var href=linkM[1],title=st(linkM[2]);
          var excerptM=bl.match(/<div[^>]*class="torrent_excerpt"[^>]*>([\s\S]*?)<\/div>/i);
          var content=excerptM?st(excerptM[1]).replace(/\n/g," | ").replace(/\s+/g," "):"";
          var sizeM=bl.match(/<span[^>]*class="torrent_size"[^>]*>([\s\S]*?)<\/span>/i);
          var filesM=bl.match(/<span[^>]*class="torrent_files"[^>]*>([\s\S]*?)<\/span>/i);
          var files=filesM?parseInt(st(filesM[1]))||1:1;
          var magnetM=bl.match(/<div[^>]*class="torrent_magnet"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>/i);
          r.push({url:"https://btdig.com"+href,title:title,content:content,filesize:sizeM?st(sizeM[1]):"",files:files,magnetlink:magnetM?magnetM[1]:"",template:"torrent.html"});
        }
        return r;
      },
    };

    EG_b3.cachy_os = { name:"cachy_os", categories:["packages","it"], shortcut:"co", paging:!0,
          useRenderer: !0,
      async request(query,params,sq){
        var qp={search:query,page_size:15,current_page:sq.pageno};
        params.url="https://packages.cachyos.org/api/search?"+new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.packages)return r;
        for(var i=0;i<json.packages.length;i++){
          var item=json.packages[i],pkgName=item.pkg_name,arch=item.pkg_arch,repo=item.repo_name;
          r.push({template:"packages.html",url:"https://packages.cachyos.org/package/"+repo+"/"+arch+"/"+pkgName,title:pkgName+" ("+repo+")",package_name:pkgName,publishedDate:item.pkg_builddate?new Date(item.pkg_builddate*1000):null,version:item.pkg_version,content:item.pkg_desc||"",tags:[arch]});
        }
        return r;
      },
    };

    EG_b3.ccc_media = { name:"ccc_media", categories:["videos"], shortcut:"ccc", paging:!0,
          useRenderer: !0,
      async request(query,params,sq){
        var args={q:query,page:sq.pageno};
        params.url="https://api.media.ccc.de/public/events/search?"+new URLSearchParams(args).toString();
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.events)return r;
        for(var i=0;i<json.events.length;i++){
          var item=json.events[i],publishedDate=item.date?new Date(item.date):null,iframeSrc=null,recs=item.recordings||[];
          for(var j=0;j<recs.length;j++){
            var rec=recs[j];
            if(rec.mime_type&&rec.mime_type.indexOf("video")===0){
              if(!iframeSrc)iframeSrc=rec.recording_url;
              else if(rec.mime_type==="video/mp4")iframeSrc=rec.recording_url;
            }
          }
          r.push({template:"videos.html",url:item.frontend_link,title:item.title,content:item.description||"",thumbnail:item.thumb_url,publishedDate:publishedDate,length:item.length,iframe_src:iframeSrc});
        }
        return r;
      },
    };

    EG_b3.cloudflareai = { name:"cloudflareai", categories:["general","ai"], shortcut:"cfai", paging:!1,
          useRenderer: !0,
      cf_account_id:"",cf_ai_api:"",cf_ai_gateway:"",cf_ai_model:"",cf_ai_model_display_name:"Cloudflare AI",
      cf_ai_model_assistant:"Keep your answers as short and effective as possible.",
      cf_ai_model_system:"You are a self-aware language model who is honest and direct about any question from the user.",
      async request(query,params,sq){
        params.method="POST";
        params.url="https://gateway.ai.cloudflare.com/v1/"+this.cf_account_id+"/"+this.cf_ai_gateway+"/workers-ai/"+this.cf_ai_model;
        params.data=JSON.stringify({messages:[{role:"assistant",content:this.cf_ai_model_assistant},{role:"system",content:this.cf_ai_model_system},{role:"user",content:query}]});
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||json.error)return r;
        if(json.result)r.push({content:json.result.response,infobox:this.cf_ai_model_display_name});
        return r;
      },
    };

    EG_b3.core = { name:"core", categories:["science","scientific publications"], shortcut:"core", paging:!0,
          useRenderer: !0,
      api_key:"",
      async request(query,params,sq){
        var qp={q:query,offset:(sq.pageno-1)*10,limit:10,sort:"relevance"};
        params.url="https://api.core.ac.uk/v3/search/works/?"+new URLSearchParams(qp).toString();
        params.headers["Authorization"]="Bearer "+this.api_key;
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.results)return r;
        for(var i=0;i<json.results.length;i++){
          var item=json.results[i];
          if(!item.title)continue;
          var url=null;
          if(item.doi)url="https://doi.org/"+item.doi;
          else if(item.id)url="https://core.ac.uk/works/"+item.id;
          else if(item.downloadUrl)url=item.downloadUrl;
          else if(item.sourceFulltextUrls)url=item.sourceFulltextUrls;
          else continue;
          var publishedDate=null,rawDate=item.publishedDate||item.depositedDate;
          if(rawDate){try{publishedDate=new Date(rawDate);}catch(e){}}
          var authors=[];
          if(item.authors){for(var j=0;j<item.authors.length;j++){if(item.authors[j].name)authors.push(item.authors[j].name);}}
          r.push({title:item.title,url:url,content:item.fullText||"",tags:item.fieldOfStudy||[],publishedDate:publishedDate,authors:authors,publisher:(item.publisher||"").replace(/'/g,"")});
        }
        return r;
      },
    };

    EG_b3.currency_convert = { name:"currency_convert", categories:["currency","general"], shortcut:"cc", paging:!1,
          useRenderer: !0,
      base_url:"https://duckduckgo.com/js/spice/currency/1/%(from)s/%(to)s",
      ddg_link_url:"https://duckduckgo.com/?q=%(from)s+to+%(to)s",
      async request(query,params,sq){
        params.url=this.base_url.replace("%(from)s",params.from_iso4217).replace("%(to)s",params.to_iso4217);
        return params;
      },
      async response(resp,sq){
        var r=[],text=resp.text;
        var start=text.indexOf("\n")+1,end=text.lastIndexOf("\n")-2,jsonStr=text.slice(start,end),json;
        try{json=JSON.parse(jsonStr);}catch(e){return r;}
        var rate;
        try{rate=parseFloat(json.to[0].mid);}catch(e){return r;}
        var sp=resp.search_params||{};
        var amount=parseFloat(sp.amount)||1,from=sp.from_iso4217||"",to=sp.to_iso4217||"",fromName=sp.from_name||from,toName=sp.to_name||to;
        r.push({content:amount+" "+from+" = "+(amount*rate)+" "+to+" (1 "+fromName+" : "+rate+" "+toName+")",url:this.ddg_link_url.replace("%(from)s",from).replace("%(to)s",to)});
        return r;
      },
    };

    EG_b3.dailymotion = { name:"dailymotion", categories:["videos"], shortcut:"dm", paging:!0, time_range_support:!0, safesearch:!0,
      number_of_results:10,
      familyFilterMap:{0:"false",1:"true",2:"true"},
      safesearchParams:{0:{},1:{is_created_for_kids:"true"},2:{is_created_for_kids:"true"}},
      resultFields:["allow_embed","description","title","created_time","duration","url","thumbnail_360_url","id"],
      iframeSrc:"https://www.dailymotion.com/embed/video/{video_id}",
      timeDelta:{day:1,week:7,month:31,year:365},
      async request(query,params,sq){
        if(!query)return false;
        var args={search:query,family_filter:this.familyFilterMap[sq.safesearch]||"false",thumbnail_ratio:"original",languages:sq.language||"en",page:sq.pageno,password_protected:"false",private:"false",sort:"relevance",limit:this.number_of_results,fields:this.resultFields.join(",")};
        var ss=this.safesearchParams[sq.safesearch]||{};
        for(var k in ss)args[k]=ss[k];
        if(sq.timeRange&&this.timeDelta[sq.timeRange]){args.created_after=Math.floor((Date.now()-this.timeDelta[sq.timeRange]*86400000)/1000);}
        params.url="https://api.dailymotion.com/videos?"+new URLSearchParams(args).toString();
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||json.error)return r;
        var list=json.list||[];
        for(var i=0;i<list.length;i++){
          var res=list[i],title=res.title,url=res.url,content=st(res.description||"");
          if(content.length>300)content=content.slice(0,300)+"...";
          var publishedDate=res.created_time?new Date(res.created_time*1000):null,duration=res.duration||0;
          var hours=Math.floor(duration/3600),mins=Math.floor((duration%3600)/60),secs=duration%60;
          var length=hours?String(hours).padStart(2,"0")+":"+String(mins).padStart(2,"0")+":"+String(secs).padStart(2,"0"):String(mins).padStart(2,"0")+":"+String(secs).padStart(2,"0");
          var thumbnail=(res.thumbnail_360_url||"").replace("http://","https://");
          var item={template:"videos.html",url:url,title:title,content:content,publishedDate:publishedDate,length:length,thumbnail:thumbnail};
          if(res.allow_embed)item.iframe_src=this.iframeSrc.replace("{video_id}",res.id);
          r.push(item);
        }
        return r;
      },
    };

    EG_b3.deepl = { name:"deepl", categories:["general","translate"], shortcut:"dl", paging:!1,
          useRenderer: !0,
      api_key:"",
      async request(query,params,sq){
        params.method="POST";
        params.url="https://api-free.deepl.com/v2/translate";
        params.data={auth_key:this.api_key,text:query,target_lang:params.to_lang?params.to_lang[1]:""};
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.translations)return r;
        for(var i=0;i<json.translations.length;i++)r.push({content:json.translations[i].text});
        return r;
      },
    };

    EG_b3.deezer = { name:"deezer", categories:["music"], shortcut:"dz", paging:!0,
          useRenderer: !0,
      iframeSrc:"https://www.deezer.com/plugins/player?type=tracks&id={audioid}",
      async request(query,params,sq){
        var offset=(sq.pageno-1)*25;
        params.url="https://api.deezer.com/search?"+new URLSearchParams({q:query}).toString()+"&index="+offset;
        return params;
      },
      async response(resp,sq){
        var r=[],json=resp.json;
        if(!json||!json.data)return r;
        for(var i=0;i<json.data.length;i++){
          var result=json.data[i];
          if(result.type==="track"){
            var title=result.title,url=result.link||"";
            if(url.indexOf("http://")===0)url="https"+url.slice(4);
            var content=(result.artist?result.artist.name:"")+" - "+(result.album?result.album.title:"")+" - "+title;
            r.push({url:url,title:title,iframe_src:this.iframeSrc.replace("{audioid}",result.id),content:content});
          }
        }
        return r;
      },
    };
  });
