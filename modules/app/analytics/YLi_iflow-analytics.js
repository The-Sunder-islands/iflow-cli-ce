/**
 * @module YLi
 * @category app/analytics
 * @label iflow-analytics
 * @position 1830 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YLi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t extends Rr, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class t extends E3, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends
 * Features: esbuild module exports: YLi
 * === End semantic info ===
 */


var YLi = T((Ee) => {
  "use strict";
  var kQa = j3i(),
    gl = Vgr(),
    Mxi = Vme(),
    OQa = Wme(),
    NQa = zme(),
    Xn = Amt(),
    Fxi = vK(),
    PQa = b9(),
    jK = (EA(), bt(hK)),
    IA = (Wc(), bt(r0t)),
    BQa = W9i(),
    LQa = Zme(),
    Mr = QS(),
    Uxi = GS(),
    Rr = Ga(),
    $xi = lAr(),
    MQa = wxi(),
    jxi = TK(),
    Qxi = Tc(),
    XS = Ixi(),
    FQa = Oxi(),
    w1 = Lxi(),
    UQa = (t) =>
      Object.assign(t, {
        useFipsEndpoint: t.useFipsEndpoint ?? !1,
        useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
        forcePathStyle: t.forcePathStyle ?? !1,
        useAccelerateEndpoint: t.useAccelerateEndpoint ?? !1,
        useGlobalEndpoint: t.useGlobalEndpoint ?? !1,
        disableMultiregionAccessPoints: t.disableMultiregionAccessPoints ?? !1,
        defaultSigningName: "s3",
        clientContextParams: t.clientContextParams ?? {},
      }),
    Fr = {
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    E3 = class t extends Rr.ServiceException {
      constructor(e) {
        (super(e), Object.setPrototypeOf(this, t.prototype));
      }
    },
    L1t = class t extends E3 {
      name = "NoSuchUpload";
      $fault = "client";
      constructor(e) {
        (super({ name: "NoSuchUpload", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    M1t = class t extends E3 {
      name = "ObjectNotInActiveTierError";
      $fault = "client";
      constructor(e) {
        (super({ name: "ObjectNotInActiveTierError", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype));
      }
    },
    F1t = class t extends E3 {
      name = "BucketAlreadyExists";
      $fault = "client";
      constructor(e) {
        (super({ name: "BucketAlreadyExists", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    U1t = class t extends E3 {
      name = "BucketAlreadyOwnedByYou";
      $fault = "client";
      constructor(e) {
        (super({ name: "BucketAlreadyOwnedByYou", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    $1t = class t extends E3 {
      name = "NoSuchBucket";
      $fault = "client";
      constructor(e) {
        (super({ name: "NoSuchBucket", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    j1t = class t extends E3 {
      name = "InvalidObjectState";
      $fault = "client";
      StorageClass;
      AccessTier;
      constructor(e) {
        (super({ name: "InvalidObjectState", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype),
          (this.StorageClass = e.StorageClass),
          (this.AccessTier = e.AccessTier));
      }
    },
    Q1t = class t extends E3 {
      name = "NoSuchKey";
      $fault = "client";
      constructor(e) {
        (super({ name: "NoSuchKey", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    G1t = class t extends E3 {
      name = "NotFound";
      $fault = "client";
      constructor(e) {
        (super({ name: "NotFound", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    q1t = class t extends E3 {
      name = "EncryptionTypeMismatch";
      $fault = "client";
      constructor(e) {
        (super({ name: "EncryptionTypeMismatch", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    H1t = class t extends E3 {
      name = "InvalidRequest";
      $fault = "client";
      constructor(e) {
        (super({ name: "InvalidRequest", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    V1t = class t extends E3 {
      name = "InvalidWriteOffset";
      $fault = "client";
      constructor(e) {
        (super({ name: "InvalidWriteOffset", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    W1t = class t extends E3 {
      name = "TooManyParts";
      $fault = "client";
      constructor(e) {
        (super({ name: "TooManyParts", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    z1t = class t extends E3 {
      name = "IdempotencyParameterMismatch";
      $fault = "client";
      constructor(e) {
        (super({ name: "IdempotencyParameterMismatch", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype));
      }
    },
    Y1t = class t extends E3 {
      name = "ObjectAlreadyInActiveTierError";
      $fault = "client";
      constructor(e) {
        (super({ name: "ObjectAlreadyInActiveTierError", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype));
      }
    },
    $Qa = "Account",
    jQa = "AnalyticsAndOperator",
    K1t = "AccelerateConfiguration",
    cht = "AccessControlList",
    Ide = "ACL",
    Zxi = "AnalyticsConfigurationList",
    QK = "AccessControlPolicy",
    eTi = "AccessControlTranslation",
    gxe = "AnalyticsConfiguration",
    tTi = "AbortDate",
    QQa = "AnalyticsExportDestination",
    GQa = "AnalyticsFilter",
    qQa = "AllowedHeaders",
    HQa = "AllowedHeader",
    VQa = "AccountId",
    rTi = "AbortIncompleteMultipartUpload",
    Gxi = "AccessKeyId",
    WQa = "AllowedMethods",
    zQa = "AbortMultipartUpload",
    YQa = "AbortMultipartUploadOutput",
    KQa = "AbortMultipartUploadRequest",
    JQa = "AllowedMethod",
    XQa = "AllowedOrigins",
    ZQa = "AllowedOrigin",
    eGa = "AccessPointAlias",
    nTi = "AccessPointArn",
    tGa = "AllowQuotedRecordDelimiter",
    Z2r = "AcceptRanges",
    iTi = "AbortRuleId",
    J1t = "AbacStatus",
    rGa = "AnalyticsS3BucketDestination",
    nGa = "ApplyServerSideEncryptionByDefault",
    iGa = "ArchiveStatus",
    oTi = "AccessTier",
    wxe = "And",
    Dr = "Bucket",
    e5r = "BucketArn",
    oGa = "BucketAlreadyExists",
    sGa = "BucketAccountId",
    aGa = "BucketAlreadyOwnedByYou",
    sTi = "BlockedEncryptionTypes",
    t5r = "BypassGovernanceRetention",
    uGa = "BucketInfo",
    d5 = "BucketKeyEnabled",
    cGa = "BucketLifecycleConfiguration",
    lGa = "BucketLocationName",
    X1t = "BucketLoggingStatus",
    mGa = "BucketLocationType",
    dGa = "BucketName",
    aTi = "BytesProcessed",
    qxi = "BlockPublicAcls",
    Hxi = "BlockPublicPolicy",
    r5r = "BucketRegion",
    uTi = "BytesReturned",
    cTi = "BytesScanned",
    xxe = "Body",
    n5r = "Buckets",
    lTi = "Checksum",
    Ou = "ChecksumAlgorithm",
    fGa = "CannedACL",
    pGa = "CreateBucket",
    H2r = "CreateBucketConfiguration",
    hGa = "CreateBucketMetadataConfiguration",
    gGa = "CreateBucketMetadataConfigurationRequest",
    bGa = "CreateBucketMetadataTableConfiguration",
    AGa = "CreateBucketMetadataTableConfigurationRequest",
    yGa = "CreateBucketOutput",
    _Ga = "CreateBucketRequest",
    Rde = "CacheControl",
    f5 = "ChecksumCRC32",
    p5 = "ChecksumCRC32C",
    h5 = "ChecksumCRC64NVME",
    Txe = "Cache-Control",
    EGa = "CreationDate",
    Dxe = "Content-Disposition",
    kde = "ContentDisposition",
    vGa = "ContinuationEvent",
    Ixe = "Content-Encoding",
    Ode = "ContentEncoding",
    CGa = "CloudFunction",
    SGa = "CloudFunctionConfiguration",
    Nde = "ContentLanguage",
    Rxe = "Content-Language",
    kxe = "Content-Length",
    Oxe = "ContentLength",
    fd = "Content-MD5",
    pd = "ContentMD5",
    wGa = "CompletedMultipartUpload",
    xGa = "CompleteMultipartUploadOutput",
    TGa = "CreateMultipartUploadOutput",
    DGa = "CompleteMultipartUploadResult",
    IGa = "CompleteMultipartUploadRequest",
    RGa = "CreateMultipartUploadRequest",
    mTi = "CompleteMultipartUpload",
    kGa = "CreateMultipartUpload",
    dTi = "ChecksumMode",
    OGa = "CopyObject",
    NGa = "CopyObjectOutput",
    fTi = "CopyObjectResult",
    Z1t = "CORSConfiguration",
    i5r = "CORSRules",
    o5r = "CORSRule",
    PGa = "CopyObjectRequest",
    BGa = "CommonPrefix",
    LGa = "CommonPrefixList",
    MGa = "CompletedPartList",
    pTi = "CopyPartResult",
    FGa = "CompletedPart",
    lht = "CommonPrefixes",
    s5r = "ContentRange",
    UGa = "ConfirmRemoveSelfBucketAccess",
    hTi = "Content-Range",
    gTi = "CopySource",
    g5 = "ChecksumSHA1",
    b5 = "ChecksumSHA256",
    bTi = "CopySourceIfMatch",
    ATi = "CopySourceIfModifiedSince",
    yTi = "CopySourceIfNoneMatch",
    _Ti = "CopySourceIfUnmodifiedSince",
    $Ga = "CreateSessionOutput",
    jGa = "CreateSessionResult",
    QGa = "CopySourceRange",
    GGa = "CreateSessionRequest",
    ETi = "CopySourceSSECustomerAlgorithm",
    a5r = "CopySourceSSECustomerKey",
    vTi = "CopySourceSSECustomerKeyMD5",
    CTi = "CSV",
    STi = "CopySourceVersionId",
    qGa = "CSVInput",
    HGa = "CSVOutput",
    u5r = "ConfigurationState",
    VGa = "CreateSession",
    py = "ChecksumType",
    Nxe = "Content-Type",
    WGa = "ClientToken",
    Pde = "ContentType",
    zGa = "CompressionType",
    _9 = "ContinuationToken",
    wTi = "Condition",
    YGa = "Code",
    KGa = "Comments",
    xTi = "Contents",
    JGa = "Cont",
    Vxi = "Credentials",
    Bde = "Days",
    XGa = "DaysAfterInitiation",
    ZGa = "DeleteBucket",
    eqa = "DeleteBucketAnalyticsConfiguration",
    tqa = "DeleteBucketAnalyticsConfigurationRequest",
    rqa = "DeleteBucketCors",
    nqa = "DeleteBucketCorsRequest",
    iqa = "DeleteBucketEncryption",
    oqa = "DeleteBucketEncryptionRequest",
    sqa = "DeleteBucketInventoryConfiguration",
    aqa = "DeleteBucketInventoryConfigurationRequest",
    uqa = "DeleteBucketIntelligentTieringConfiguration",
    cqa = "DeleteBucketIntelligentTieringConfigurationRequest",
    lqa = "DeleteBucketLifecycle",
    mqa = "DeleteBucketLifecycleRequest",
    dqa = "DeleteBucketMetadataConfiguration",
    fqa = "DeleteBucketMetadataConfigurationRequest",
    pqa = "DeleteBucketMetricsConfigurationRequest",
    hqa = "DeleteBucketMetricsConfiguration",
    gqa = "DeleteBucketMetadataTableConfiguration",
    bqa = "DeleteBucketMetadataTableConfigurationRequest",
    Aqa = "DeleteBucketOwnershipControls",
    yqa = "DeleteBucketOwnershipControlsRequest",
    _qa = "DeleteBucketPolicy",
    Eqa = "DeleteBucketPolicyRequest",
    vqa = "DeleteBucketRequest",
    Cqa = "DeleteBucketReplicationRequest",
    Sqa = "DeleteBucketReplication",
    wqa = "DeleteBucketTagging",
    xqa = "DeleteBucketTaggingRequest",
    Tqa = "DeleteBucketWebsite",
    Dqa = "DeleteBucketWebsiteRequest",
    Iqa = "DataExport",
    Rqa = "DestinationIfMatch",
    kqa = "DestinationIfModifiedSince",
    Oqa = "DestinationIfNoneMatch",
    Nqa = "DestinationIfUnmodifiedSince",
    GK = "DeleteMarker",
    Pqa = "DeleteMarkerEntry",
    TTi = "DeleteMarkerReplication",
    Bqa = "DeleteMarkerVersionId",
    DTi = "DeleteMarkers",
    c5r = "DisplayName",
    Lqa = "DeletedObject",
    Mqa = "DeleteObjectOutput",
    Fqa = "DeleteObjectsOutput",
    Uqa = "DeleteObjectRequest",
    $qa = "DeleteObjectsRequest",
    jqa = "DeleteObjectTagging",
    Qqa = "DeleteObjectTaggingOutput",
    Gqa = "DeleteObjectTaggingRequest",
    qqa = "DeletedObjects",
    Hqa = "DeleteObject",
    Vqa = "DeleteObjects",
    Wqa = "DeletePublicAccessBlock",
    zqa = "DeletePublicAccessBlockRequest",
    Yqa = "DataRedundancy",
    ITi = "DefaultRetention",
    Kqa = "DeleteResult",
    RTi = "DestinationResult",
    kTi = "Date",
    V2r = "Delete",
    Jqa = "Deleted",
    uj = "Delimiter",
    mht = "Destination",
    Xqa = "Description",
    OTi = "Details",
    yI = "Expiration",
    Zqa = "EmailAddress",
    NTi = "EventBridgeConfiguration",
    Jr = "ExpectedBucketOwner",
    Pxe = "EncryptionConfiguration",
    PTi = "ErrorCode",
    eHa = "ErrorDetails",
    l5r = "ErrorDocument",
    tHa = "EndEvent",
    rHa = "ExposeHeaders",
    nHa = "ExposeHeader",
    BTi = "ErrorMessage",
    iHa = "ExpiredObjectDeleteMarker",
    LTi = "ExistingObjectReplication",
    eft = "ExpiresString",
    MTi = "ExpectedSourceBucketOwner",
    m5r = "EncryptionType",
    oHa = "EncryptionTypeList",
    sHa = "EncryptionTypeMismatch",
    v3 = "ETag",
    cj = "EncodingType",
    aHa = "EventThreshold",
    FTi = "ExpressionType",
    d5r = "Encryption",
    uHa = "Enabled",
    UTi = "End",
    $Ti = "Errors",
    Bxe = "Error",
    f5r = "Events",
    p5r = "Event",
    KS = "Expires",
    jTi = "Expression",
    $N = "Filter",
    QTi = "FieldDelimiter",
    cHa = "FileHeaderInfo",
    lHa = "FetchOwner",
    GTi = "FilterRule",
    mHa = "FilterRuleList",
    dHa = "FilterRules",
    fHa = "Field",
    qTi = "Format",
    pHa = "Frequency",
    dht = "Grants",
    hHa = "GetBucketAbac",
    gHa = "GetBucketAccelerateConfiguration",
    bHa = "GetBucketAccelerateConfigurationOutput",
    AHa = "GetBucketAnalyticsConfigurationOutput",
    yHa = "GetBucketAccelerateConfigurationRequest",
    _Ha = "GetBucketAnalyticsConfigurationRequest",
    EHa = "GetBucketAnalyticsConfiguration",
    vHa = "GetBucketAbacOutput",
    CHa = "GetBucketAclOutput",
    SHa = "GetBucketAbacRequest",
    wHa = "GetBucketAclRequest",
    xHa = "GetBucketAcl",
    THa = "GetBucketCors",
    DHa = "GetBucketCorsOutput",
    IHa = "GetBucketCorsRequest",
    RHa = "GetBucketEncryption",
    kHa = "GetBucketEncryptionOutput",
    OHa = "GetBucketEncryptionRequest",
    NHa = "GetBucketInventoryConfiguration",
    PHa = "GetBucketInventoryConfigurationOutput",
    BHa = "GetBucketInventoryConfigurationRequest",
    LHa = "GetBucketIntelligentTieringConfiguration",
    MHa = "GetBucketIntelligentTieringConfigurationOutput",
    FHa = "GetBucketIntelligentTieringConfigurationRequest",
    UHa = "GetBucketLocation",
    $Ha = "GetBucketLifecycleConfiguration",
    jHa = "GetBucketLifecycleConfigurationOutput",
    QHa = "GetBucketLifecycleConfigurationRequest",
    GHa = "GetBucketLocationOutput",
    qHa = "GetBucketLoggingOutput",
    HHa = "GetBucketLocationRequest",
    VHa = "GetBucketLoggingRequest",
    WHa = "GetBucketLogging",
    zHa = "GetBucketMetadataConfiguration",
    YHa = "GetBucketMetadataConfigurationOutput",
    KHa = "GetBucketMetricsConfigurationOutput",
    HTi = "GetBucketMetadataConfigurationResult",
    JHa = "GetBucketMetadataConfigurationRequest",
    XHa = "GetBucketMetricsConfigurationRequest",
    ZHa = "GetBucketMetricsConfiguration",
    eVa = "GetBucketMetadataTableConfiguration",
    tVa = "GetBucketMetadataTableConfigurationOutput",
    VTi = "GetBucketMetadataTableConfigurationResult",
    rVa = "GetBucketMetadataTableConfigurationRequest",
    nVa = "GetBucketNotificationConfiguration",
    iVa = "GetBucketNotificationConfigurationRequest",
    oVa = "GetBucketOwnershipControls",
    sVa = "GetBucketOwnershipControlsOutput",
    aVa = "GetBucketOwnershipControlsRequest",
    uVa = "GetBucketPolicy",
    cVa = "GetBucketPolicyOutput",
    lVa = "GetBucketPolicyRequest",
    mVa = "GetBucketPolicyStatus",
    dVa = "GetBucketPolicyStatusOutput",
    fVa = "GetBucketPolicyStatusRequest",
    pVa = "GetBucketReplication",
    hVa = "GetBucketReplicationOutput",
    gVa = "GetBucketRequestPayment",
    bVa = "GetBucketRequestPaymentOutput",
    AVa = "GetBucketRequestPaymentRequest",
    yVa = "GetBucketReplicationRequest",
    _Va = "GetBucketTagging",
    EVa = "GetBucketTaggingOutput",
    vVa = "GetBucketTaggingRequest",
    CVa = "GetBucketVersioning",
    SVa = "GetBucketVersioningOutput",
    wVa = "GetBucketVersioningRequest",
    xVa = "GetBucketWebsite",
    TVa = "GetBucketWebsiteOutput",
    DVa = "GetBucketWebsiteRequest",
    Lde = "GrantFullControl",
    WTi = "GlacierJobParameters",
    IVa = "GetObject",
    RVa = "GetObjectAcl",
    kVa = "GetObjectAclOutput",
    OVa = "GetObjectAttributesOutput",
    NVa = "GetObjectAttributesParts",
    PVa = "GetObjectAclRequest",
    BVa = "GetObjectAttributesResponse",
    LVa = "GetObjectAttributesRequest",
    MVa = "GetObjectAttributes",
    FVa = "GetObjectLockConfiguration",
    UVa = "GetObjectLockConfigurationOutput",
    $Va = "GetObjectLockConfigurationRequest",
    jVa = "GetObjectLegalHold",
    QVa = "GetObjectLegalHoldOutput",
    GVa = "GetObjectLegalHoldRequest",
    qVa = "GetObjectOutput",
    HVa = "GetObjectRequest",
    VVa = "GetObjectRetentionOutput",
    WVa = "GetObjectRetentionRequest",
    zVa = "GetObjectRetention",
    YVa = "GetObjectTagging",
    KVa = "GetObjectTaggingOutput",
    JVa = "GetObjectTorrentOutput",
    XVa = "GetObjectTaggingRequest",
    ZVa = "GetObjectTorrentRequest",
    eWa = "GetObjectTorrent",
    tWa = "GetPublicAccessBlock",
    rWa = "GetPublicAccessBlockOutput",
    nWa = "GetPublicAccessBlockRequest",
    Mde = "GrantRead",
    Fde = "GrantReadACP",
    h5r = "GrantWrite",
    Ude = "GrantWriteACP",
    g5r = "Grant",
    b5r = "Grantee",
    iWa = "HeadBucket",
    oWa = "HeadBucketOutput",
    sWa = "HeadBucketRequest",
    aWa = "HttpErrorCodeReturnedEquals",
    zTi = "HostName",
    uWa = "HeadObject",
    cWa = "HeadObjectOutput",
    lWa = "HeadObjectRequest",
    mWa = "HttpRedirectCode",
    Kp = "Id",
    bxe = "InventoryConfiguration",
    YTi = "InventoryConfigurationList",
    $de = "ID",
    A5r = "IndexDocument",
    dWa = "InventoryDestination",
    fWa = "IsEnabled",
    pWa = "InventoryEncryption",
    hWa = "InventoryFilter",
    KTi = "IsLatest",
    jde = "IfMatch",
    gWa = "IfMatchInitiatedTime",
    bWa = "IfMatchLastModifiedTime",
    AWa = "IfMatchSize",
    y5r = "If-Modified-Since",
    JTi = "IfModifiedSince",
    yWa = "InitiateMultipartUploadResult",
    qK = "If-Match",
    Lxe = "IfNoneMatch",
    Qde = "If-None-Match",
    _Wa = "InventoryOptionalFields",
    EWa = "InvalidObjectState",
    vWa = "IncludedObjectVersions",
    Wxi = "IsPublic",
    zxi = "IgnorePublicAcls",
    CWa = "IdempotencyParameterMismatch",
    SWa = "InvalidRequest",
    wWa = "IsRestoreInProgress",
    _5r = "InputSerialization",
    xWa = "InventoryS3BucketDestination",
    TWa = "InventorySchedule",
    _I = "IsTruncated",
    DWa = "IntelligentTieringAndOperator",
    Axe = "IntelligentTieringConfiguration",
    XTi = "IntelligentTieringConfigurationList",
    ZTi = "InventoryTableConfigurationResult",
    IWa = "InventoryTableConfigurationUpdates",
    tft = "InventoryTableConfiguration",
    RWa = "IntelligentTieringFilter",
    eDi = "IfUnmodifiedSince",
    E5r = "If-Unmodified-Since",
    kWa = "InvalidWriteOffset",
    v5r = "Initiator",
    OWa = "Initiated",
    tDi = "JSON",
    NWa = "JSONInput",
    PWa = "JSONOutput",
    rft = "JournalTableConfiguration",
    rDi = "JournalTableConfigurationResult",
    BWa = "JournalTableConfigurationUpdates",
    Za = "Key",
    LWa = "KeyCount",
    MWa = "KeyId",
    FWa = "KmsKeyArn",
    fht = "KeyMarker",
    UWa = "KMSContext",
    $Wa = "KMSKeyId",
    jWa = "KMSMasterKeyID",
    QWa = "KeyPrefixEquals",
    nft = "Location",
    GWa = "ListAllMyBucketsResult",
    qWa = "ListAllMyDirectoryBucketsResult",
    HWa = "ListBuckets",
    VWa = "ListBucketAnalyticsConfigurations",
    WWa = "ListBucketAnalyticsConfigurationsOutput",
    zWa = "ListBucketAnalyticsConfigurationResult",
    YWa = "ListBucketAnalyticsConfigurationsRequest",
    KWa = "ListBucketInventoryConfigurations",
    JWa = "ListBucketInventoryConfigurationsOutput",
    XWa = "ListBucketInventoryConfigurationsRequest",
    ZWa = "ListBucketIntelligentTieringConfigurations",
    eza = "ListBucketIntelligentTieringConfigurationsOutput",
    tza = "ListBucketIntelligentTieringConfigurationsRequest",
    rza = "ListBucketMetricsConfigurations",
    nza = "ListBucketMetricsConfigurationsOutput",
    iza = "ListBucketMetricsConfigurationsRequest",
    oza = "ListBucketsOutput",
    sza = "ListBucketsRequest",
    nDi = "ListBucketResult",
    W2r = "LocationConstraint",
    z2r = "LifecycleConfiguration",
    aza = "ListDirectoryBuckets",
    uza = "ListDirectoryBucketsOutput",
    cza = "ListDirectoryBucketsRequest",
    C5r = "LoggingEnabled",
    lza = "LifecycleExpiration",
    mza = "LambdaFunctionArn",
    dza = "LambdaFunctionConfiguration",
    fza = "LambdaFunctionConfigurationList",
    pza = "LambdaFunctionConfigurations",
    ift = "LegalHold",
    hza = "LocationInfo",
    gza = "ListInventoryConfigurationsResult",
    EI = "LastModified",
    bza = "ListMetricsConfigurationsResult",
    Aza = "LastModifiedTime",
    yza = "ListMultipartUploads",
    _za = "ListMultipartUploadsOutput",
    Eza = "ListMultipartUploadsResult",
    vza = "ListMultipartUploadsRequest",
    S5r = "Last-Modified",
    Cza = "ListObjects",
    Sza = "ListObjectsOutput",
    wza = "ListObjectsRequest",
    xza = "ListObjectsV2",
    Tza = "ListObjectsV2Output",
    Dza = "ListObjectVersionsOutput",
    Iza = "ListObjectsV2Request",
    Rza = "ListObjectVersionsRequest",
    kza = "ListObjectVersions",
    Oza = "ListParts",
    Nza = "ListPartsOutput",
    Pza = "ListPartsResult",
    Bza = "ListPartsRequest",
    Lza = "LifecycleRule",
    Mza = "LifecycleRuleAndOperator",
    Fza = "LifecycleRuleFilter",
    Uza = "LifecycleRules",
    $za = "ListVersionsResult",
    Gde = "Metadata",
    jza = "MetricsAndOperator",
    Qza = "MaxAgeSeconds",
    Gza = "MaxBuckets",
    Y2r = "MetadataConfiguration",
    iDi = "MetricsConfigurationList",
    oDi = "MetadataConfigurationResult",
    yxe = "MetricsConfiguration",
    qza = "MetadataDirective",
    Hza = "MaxDirectoryBuckets",
    sDi = "MfaDelete",
    aDi = "MetadataEntry",
    Vza = "MetricsFilter",
    w5r = "MFA",
    uDi = "MFADelete",
    qde = "MaxKeys",
    x5r = "MissingMeta",
    Wza = "MpuObjectSize",
    pht = "MaxParts",
    K2r = "MetadataTableConfiguration",
    cDi = "MetadataTableConfigurationResult",
    zza = "MetadataTableEncryptionConfiguration",
    lDi = "MultipartUpload",
    Yza = "MultipartUploadList",
    mDi = "MaxUploads",
    dDi = "Marker",
    fDi = "Metrics",
    Kza = "Message",
    Jza = "Minutes",
    pDi = "Mode",
    HK = "Name",
    J2r = "NotificationConfiguration",
    Xza = "NotificationConfigurationFilter",
    Mxe = "NextContinuationToken",
    hDi = "NoncurrentDays",
    Zza = "NotFound",
    gDi = "NextKeyMarker",
    eYa = "NextMarker",
    bDi = "NewerNoncurrentVersions",
    ADi = "NextPartNumberMarker",
    tYa = "NoSuchBucket",
    rYa = "NoSuchKey",
    nYa = "NoSuchUpload",
    iYa = "NextUploadIdMarker",
    yDi = "NoncurrentVersionExpiration",
    oYa = "NextVersionIdMarker",
    sYa = "NoncurrentVersionTransitions",
    aYa = "NoncurrentVersionTransitionList",
    _Di = "NoncurrentVersionTransition",
    ZS = "Owner",
    uYa = "ObjectAttributes",
    cYa = "ObjectAlreadyInActiveTierError",
    oft = "OwnershipControls",
    lYa = "OwnershipControlsRule",
    mYa = "OwnershipControlsRules",
    dYa = "OptionalFields",
    fYa = "ObjectIdentifier",
    pYa = "ObjectIdentifierList",
    EDi = "OutputLocation",
    sft = "ObjectLockConfiguration",
    hYa = "ObjectLockEnabled",
    gYa = "ObjectLockEnabledForBucket",
    bYa = "ObjectLockLegalHold",
    Hde = "ObjectLockLegalHoldStatus",
    Vde = "ObjectLockMode",
    AYa = "ObjectLockRetention",
    Wde = "ObjectLockRetainUntilDate",
    yYa = "ObjectLockRule",
    _Ya = "ObjectList",
    EYa = "ObjectNotInActiveTierError",
    vDi = "ObjectOwnership",
    T5r = "OptionalObjectAttributes",
    vYa = "ObjectParts",
    CYa = "ObjectPart",
    SYa = "ObjectSize",
    CDi = "ObjectSizeGreaterThan",
    SDi = "ObjectSizeLessThan",
    wYa = "OutputSchemaVersion",
    D5r = "OutputSerialization",
    xYa = "ObjectVersion",
    TYa = "ObjectVersionList",
    DYa = "Objects",
    wDi = "Object",
    O0 = "Prefix",
    aft = "PublicAccessBlockConfiguration",
    IYa = "PutBucketAbac",
    RYa = "PutBucketAccelerateConfiguration",
    kYa = "PutBucketAccelerateConfigurationRequest",
    OYa = "PutBucketAnalyticsConfigurationRequest",
    NYa = "PutBucketAnalyticsConfiguration",
    PYa = "PutBucketAbacRequest",
    BYa = "PutBucketAclRequest",
    LYa = "PutBucketAcl",
    MYa = "PutBucketCors",
    FYa = "PutBucketCorsRequest",
    UYa = "PutBucketEncryption",
    $Ya = "PutBucketEncryptionRequest",
    jYa = "PutBucketInventoryConfiguration",
    QYa = "PutBucketInventoryConfigurationRequest",
    GYa = "PutBucketIntelligentTieringConfiguration",
    qYa = "PutBucketIntelligentTieringConfigurationRequest",
    HYa = "PutBucketLogging",
    VYa = "PutBucketLifecycleConfiguration",
    WYa = "PutBucketLifecycleConfigurationOutput",
    zYa = "PutBucketLifecycleConfigurationRequest",
    YYa = "PutBucketLoggingRequest",
    KYa = "PutBucketMetricsConfiguration",
    JYa = "PutBucketMetricsConfigurationRequest",
    XYa = "PutBucketNotificationConfiguration",
    ZYa = "PutBucketNotificationConfigurationRequest",
    eKa = "PutBucketOwnershipControls",
    tKa = "PutBucketOwnershipControlsRequest",
    rKa = "PutBucketPolicy",
    nKa = "PutBucketPolicyRequest",
    iKa = "PutBucketReplication",
    oKa = "PutBucketRequestPayment",
    sKa = "PutBucketRequestPaymentRequest",
    aKa = "PutBucketReplicationRequest",
    uKa = "PutBucketTagging",
    cKa = "PutBucketTaggingRequest",
    lKa = "PutBucketVersioning",
    mKa = "PutBucketVersioningRequest",
    dKa = "PutBucketWebsite",
    fKa = "PutBucketWebsiteRequest",
    hht = "PartsCount",
    pKa = "PartitionDateSource",
    hKa = "ProgressEvent",
    gKa = "ParquetInput",
    bKa = "PartsList",
    VK = "PartNumber",
    ght = "PartNumberMarker",
    AKa = "PutObject",
    yKa = "PutObjectAcl",
    _Ka = "PutObjectAclOutput",
    EKa = "PutObjectAclRequest",
    vKa = "PutObjectLockConfiguration",
    CKa = "PutObjectLockConfigurationOutput",
    SKa = "PutObjectLockConfigurationRequest",
    wKa = "PutObjectLegalHold",
    xKa = "PutObjectLegalHoldOutput",
    TKa = "PutObjectLegalHoldRequest",
    DKa = "PutObjectOutput",
    IKa = "PutObjectRequest",
    RKa = "PutObjectRetentionOutput",
    kKa = "PutObjectRetentionRequest",
    OKa = "PutObjectRetention",
    NKa = "PutObjectTagging",
    PKa = "PutObjectTaggingOutput",
    BKa = "PutObjectTaggingRequest",
    uft = "PartitionedPrefix",
    LKa = "PutPublicAccessBlock",
    MKa = "PutPublicAccessBlockRequest",
    xDi = "PolicyStatus",
    bht = "Parts",
    Aht = "Part",
    FKa = "Parquet",
    TDi = "Payer",
    DDi = "Payload",
    IDi = "Permission",
    RDi = "Policy",
    kDi = "Progress",
    UKa = "Priority",
    ODi = "Protocol",
    $Ka = "Quiet",
    jKa = "QueueArn",
    NDi = "QuoteCharacter",
    QKa = "QueueConfigurationList",
    GKa = "QueueConfigurations",
    PDi = "QueueConfiguration",
    BDi = "QuoteEscapeCharacter",
    qKa = "QuoteFields",
    HKa = "Queue",
    Fxe = "Rules",
    I5r = "RedirectAllRequestsTo",
    rm = "RequestCharged",
    LDi = "ResponseCacheControl",
    MDi = "ResponseContentDisposition",
    FDi = "ResponseContentEncoding",
    UDi = "ResponseContentLanguage",
    $Di = "ResponseContentType",
    cft = "ReplicationConfiguration",
    R5r = "RecordDelimiter",
    jDi = "ResponseExpires",
    VKa = "RestoreExpiryDate",
    yht = "RecordExpiration",
    WKa = "RecordsEvent",
    zKa = "ReplicaKmsKeyID",
    YKa = "ReplaceKeyPrefixWith",
    KKa = "ReplaceKeyWith",
    QDi = "ReplicaModifications",
    JKa = "RenameObject",
    XKa = "RenameObjectOutput",
    ZKa = "RestoreObjectOutput",
    eJa = "RestoreOutputPath",
    tJa = "RenameObjectRequest",
    rJa = "RestoreObjectRequest",
    nJa = "RestoreObject",
    Ll = "RequestPayer",
    Yxi = "RestrictPublicBuckets",
    lft = "RequestPaymentConfiguration",
    GDi = "RequestProgress",
    k5r = "RoutingRules",
    iJa = "ReplicationRuleAndOperator",
    oJa = "ReplicationRuleFilter",
    sJa = "ReplicationRule",
    aJa = "ReplicationRules",
    uJa = "RequestRoute",
    X2r = "RestoreRequest",
    qDi = "RoutingRule",
    O5r = "ReplicationStatus",
    N5r = "RestoreStatus",
    cJa = "RenameSource",
    HDi = "ReplicationTime",
    lJa = "ReplicationTimeValue",
    mJa = "RequestToken",
    dJa = "RetainUntilDate",
    mft = "Range",
    P5r = "Restore",
    fJa = "Records",
    VDi = "Redirect",
    dft = "Retention",
    pJa = "Role",
    zde = "Rule",
    RA = "Status",
    WDi = "StartAfter",
    Kxi = "SecretAccessKey",
    hJa = "SseAlgorithm",
    gJa = "StreamingBlob",
    zDi = "S3BucketDestination",
    kA = "StorageClass",
    YDi = "StorageClassAnalysis",
    bJa = "StorageClassAnalysisDataExport",
    AJa = "SessionCredentialValue",
    yJa = "SessionCredentials",
    _Ja = "StatusCode",
    EJa = "SkipDestinationValidation",
    vJa = "StatsEvent",
    CJa = "SourceIfMatch",
    SJa = "SourceIfModifiedSince",
    wJa = "SourceIfNoneMatch",
    xJa = "SourceIfUnmodifiedSince",
    KDi = "SSE-KMS",
    JDi = "SseKmsEncryptedObjects",
    TJa = "S3KeyFilter",
    DJa = "S3Key",
    IJa = "S3Location",
    RJa = "SessionMode",
    kJa = "SelectObjectContent",
    OJa = "SelectObjectContentEventStream",
    NJa = "SelectObjectContentOutput",
    PJa = "SelectObjectContentRequest",
    XDi = "SelectParameters",
    fft = "SimplePrefix",
    ZDi = "ScanRange",
    eIi = "SSE-S3",
    tIi = "SourceSelectionCriteria",
    E9 = "ServerSideEncryption",
    BJa = "SSEAlgorithm",
    LJa = "ServerSideEncryptionByDefault",
    pft = "ServerSideEncryptionConfiguration",
    Jp = "SSECustomerAlgorithm",
    Ov = "SSECustomerKey",
    Xp = "SSECustomerKeyMD5",
    rIi = "SSEKMS",
    jN = "SSEKMSEncryptionContext",
    A5 = "SSEKMSKeyId",
    MJa = "ServerSideEncryptionRule",
    FJa = "ServerSideEncryptionRules",
    nIi = "SSES3",
    Jxi = "SessionToken",
    iIi = "S3TablesDestination",
    oIi = "S3TablesDestinationResult",
    UJa = "S3",
    $Ja = "Schedule",
    Yde = "Size",
    jJa = "Start",
    sIi = "Stats",
    QJa = "Suffix",
    Kde = "Tags",
    B5r = "TableArn",
    GJa = "TopicArn",
    qJa = "TargetBucket",
    L5r = "TableBucketArn",
    HJa = "TableBucketType",
    M5r = "TagCount",
    VJa = "TopicConfigurationList",
    WJa = "TopicConfigurations",
    aIi = "TopicConfiguration",
    zJa = "TaggingDirective",
    F5r = "TransitionDefaultMinimumObjectSize",
    uIi = "TargetGrants",
    YJa = "TargetGrant",
    KJa = "TieringList",
    JJa = "TransitionList",
    XJa = "TooManyParts",
    cIi = "TableNamespace",
    _ht = "TableName",
    lIi = "TargetObjectKeyFormat",
    ZJa = "TargetPrefix",
    eXa = "TotalPartsCount",
    Eht = "TagSet",
    mIi = "TableStatus",
    Nv = "Tag",
    JS = "Tagging",
    dIi = "Tier",
    tXa = "Tierings",
    fIi = "Tiering",
    rXa = "Time",
    pIi = "Token",
    nXa = "Topic",
    iXa = "Transitions",
    hIi = "Transition",
    Uxe = "Type",
    oXa = "Uploads",
    sXa = "UpdateBucketMetadataInventoryTableConfiguration",
    aXa = "UpdateBucketMetadataInventoryTableConfigurationRequest",
    uXa = "UpdateBucketMetadataJournalTableConfiguration",
    cXa = "UpdateBucketMetadataJournalTableConfigurationRequest",
    lj = "UploadId",
    gIi = "UploadIdMarker",
    bIi = "UserMetadata",
    lXa = "UploadPart",
    mXa = "UploadPartCopy",
    dXa = "UploadPartCopyOutput",
    fXa = "UploadPartCopyRequest",
    pXa = "UploadPartOutput",
    hXa = "UploadPartRequest",
    gXa = "URI",
    bXa = "Upload",
    U5r = "Value",
    hft = "VersioningConfiguration",
    bl = "VersionId",
    AIi = "VersionIdMarker",
    AXa = "Versions",
    yXa = "Version",
    gft = "WebsiteConfiguration",
    _Xa = "WriteGetObjectResponse",
    EXa = "WriteGetObjectResponseRequest",
    vXa = "WriteOffsetBytes",
    $xe = "WebsiteRedirectLocation",
    CXa = "Years",
    yIi = "accept-ranges",
    SXa = "bucket-region",
    v9 = "client",
    WK = "continuation-token",
    vht = "delimiter",
    C9 = "error",
    $5r = "eventPayload",
    wXa = "endpoint",
    Cht = "encoding-type",
    xXa = "fetch-owner",
    Ur = "http",
    Ml = "httpChecksum",
    hy = "httpError",
    xe = "httpHeader",
    TXa = "hostLabel",
    Yu = "httpPayload",
    Jde = "httpPrefixHeaders",
    _n = "httpQuery",
    _Ii = "http://www.w3.org/2001/XMLSchema-instance",
    Pv = "id",
    DXa = "idempotencyToken",
    EIi = "key-marker",
    IXa = "marker",
    RXa = "max-buckets",
    kXa = "max-directory-buckets",
    j5r = "max-keys",
    OXa = "max-parts",
    NXa = "max-uploads",
    jxe = "prefix",
    Sht = "partNumber",
    PXa = "part-number-marker",
    vIi = "response-cache-control",
    CIi = "response-content-disposition",
    SIi = "response-content-encoding",
    wIi = "response-content-language",
    xIi = "response-content-type",
    TIi = "response-expires",
    DIi = "streaming",
    BXa = "start-after",
    IIi = "smithy.ts.sdk.synthetic.com.amazonaws.s3",
    Qxe = "uploadId",
    LXa = "upload-id-marker",
    S9 = "versionId",
    MXa = "version-id-marker",
    RIi = "xsi",
    FXa = "xmlAttribute",
    zo = "xmlFlattened",
    lr = "xmlName",
    kIi = "xmlNamespace",
    Xde = "x-amz-acl",
    OIi = "x-amz-abort-date",
    UXa = "x-amz-access-point-alias",
    NIi = "x-amz-abort-rule-id",
    $Xa = "x-amz-archive-status",
    PIi = "x-amz-bucket-arn",
    Q5r = "x-amz-bypass-governance-retention",
    jXa = "x-amz-bucket-location-name",
    QXa = "x-amz-bucket-location-type",
    GXa = "x-amz-bucket-object-lock-enabled",
    BIi = "x-amz-bucket-object-lock-token",
    qXa = "x-amz-bucket-region",
    G5r = "x-amz-checksum-algorithm",
    zK = "x-amz-checksum-crc32",
    YK = "x-amz-checksum-crc32c",
    KK = "x-amz-checksum-crc64nvme",
    LIi = "x-amz-checksum-mode",
    HXa = "x-amz-confirm-remove-self-bucket-access",
    JK = "x-amz-checksum-sha1",
    XK = "x-amz-checksum-sha256",
    MIi = "x-amz-copy-source",
    FIi = "x-amz-copy-source-if-match",
    UIi = "x-amz-copy-source-if-modified-since",
    $Ii = "x-amz-copy-source-if-none-match",
    jIi = "x-amz-copy-source-if-unmodified-since",
    VXa = "x-amz-create-session-mode",
    WXa = "x-amz-copy-source-range",
    QIi = "x-amz-copy-source-server-side-encryption-customer-algorithm",
    GIi = "x-amz-copy-source-server-side-encryption-customer-key",
    qIi = "x-amz-copy-source-server-side-encryption-customer-key-MD5",
    HIi = "x-amz-copy-source-version-id",
    Zde = "x-amz-checksum-type",
    zXa = "x-amz-client-token",
    wht = "x-amz-delete-marker",
    Gxe = "x-amz-expiration",
    Xr = "x-amz-expected-bucket-owner",
    YXa = "x-amz-fwd-error-code",
    KXa = "x-amz-fwd-error-message",
    JXa = "x-amz-fwd-header-Cache-Control",
    XXa = "x-amz-fwd-header-Content-Disposition",
    ZXa = "x-amz-fwd-header-Content-Encoding",
    eZa = "x-amz-fwd-header-Content-Language",
    tZa = "x-amz-fwd-header-Content-Range",
    rZa = "x-amz-fwd-header-Content-Type",
    nZa = "x-amz-fwd-header-ETag",
    iZa = "x-amz-fwd-header-Expires",
    oZa = "x-amz-fwd-header-Last-Modified",
    sZa = "x-amz-fwd-header-accept-ranges",
    aZa = "x-amz-fwd-header-x-amz-checksum-crc32",
    uZa = "x-amz-fwd-header-x-amz-checksum-crc32c",
    cZa = "x-amz-fwd-header-x-amz-checksum-crc64nvme",
    lZa = "x-amz-fwd-header-x-amz-checksum-sha1",
    mZa = "x-amz-fwd-header-x-amz-checksum-sha256",
    dZa = "x-amz-fwd-header-x-amz-delete-marker",
    fZa = "x-amz-fwd-header-x-amz-expiration",
    pZa = "x-amz-fwd-header-x-amz-missing-meta",
    hZa = "x-amz-fwd-header-x-amz-mp-parts-count",
    gZa = "x-amz-fwd-header-x-amz-object-lock-legal-hold",
    bZa = "x-amz-fwd-header-x-amz-object-lock-mode",
    AZa = "x-amz-fwd-header-x-amz-object-lock-retain-until-date",
    yZa = "x-amz-fwd-header-x-amz-restore",
    _Za = "x-amz-fwd-header-x-amz-request-charged",
    EZa = "x-amz-fwd-header-x-amz-replication-status",
    vZa = "x-amz-fwd-header-x-amz-storage-class",
    CZa = "x-amz-fwd-header-x-amz-server-side-encryption",
    SZa = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id",
    wZa = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled",
    xZa = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm",
    TZa = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5",
    DZa = "x-amz-fwd-header-x-amz-tagging-count",
    IZa = "x-amz-fwd-header-x-amz-version-id",
    RZa = "x-amz-fwd-status",
    e1e = "x-amz-grant-full-control",
    t1e = "x-amz-grant-read",
    r1e = "x-amz-grant-read-acp",
    q5r = "x-amz-grant-write",
    n1e = "x-amz-grant-write-acp",
    kZa = "x-amz-if-match-initiated-time",
    OZa = "x-amz-if-match-last-modified-time",
    NZa = "x-amz-if-match-size",
    i1e = "x-amz-meta-",
    H5r = "x-amz-mfa",
    PZa = "x-amz-metadata-directive",
    VIi = "x-amz-missing-meta",
    BZa = "x-amz-mp-object-size",
    LZa = "x-amz-max-parts",
    WIi = "x-amz-mp-parts-count",
    MZa = "x-amz-object-attributes",
    qxe = "x-amz-object-lock-legal-hold",
    Hxe = "x-amz-object-lock-mode",
    Vxe = "x-amz-object-lock-retain-until-date",
    FZa = "x-amz-object-ownership",
    V5r = "x-amz-optional-object-attributes",
    UZa = "x-amz-object-size",
    $Za = "x-amz-part-number-marker",
    zIi = "x-amz-restore",
    Lm = "x-amz-request-charged",
    jZa = "x-amz-restore-output-path",
    Fl = "x-amz-request-payer",
    QZa = "x-amz-request-route",
    YIi = "x-amz-replication-status",
    GZa = "x-amz-rename-source",
    qZa = "x-amz-rename-source-if-match",
    HZa = "x-amz-rename-source-if-modified-since",
    VZa = "x-amz-rename-source-if-none-match",
    WZa = "x-amz-rename-source-if-unmodified-since",
    zZa = "x-amz-request-token",
    Wxe = "x-amz-storage-class",
    a0 = "x-amz-sdk-checksum-algorithm",
    YZa = "x-amz-skip-destination-validation",
    KIi = "x-amz-source-expected-bucket-owner",
    gy = "x-amz-server-side-encryption",
    by = "x-amz-server-side-encryption-aws-kms-key-id",
    Ay = "x-amz-server-side-encryption-bucket-key-enabled",
    mj = "x-amz-server-side-encryption-context",
    C3 = "x-amz-server-side-encryption-customer-algorithm",
    ew = "x-amz-server-side-encryption-customer-key",
    S3 = "x-amz-server-side-encryption-customer-key-MD5",
    W5r = "x-amz-tagging",
    JIi = "x-amz-tagging-count",
    KZa = "x-amz-tagging-directive",
    z5r = "x-amz-transition-default-minimum-object-size",
    vI = "x-amz-version-id",
    JZa = "x-amz-write-offset-bytes",
    zxe = "x-amz-website-redirect-location",
    XZa = "xsi:type",
    De = "com.amazonaws.s3",
    XIi = [0, De, a5r, 8, 0],
    Xxi = [0, De, AJa, 8, 0],
    tw = [0, De, Ov, 8, 0],
    dj = [0, De, jN, 8, 0],
    Kg = [0, De, A5, 8, 0],
    Yxe = [0, De, gJa, { [DIi]: 1 }, 42],
    Y5r = [3, De, J1t, 0, [RA], [0]],
    ZIi = [3, De, rTi, 0, [XGa], [1]],
    e7i = [3, De, YQa, 0, [rm], [[0, { [xe]: Lm }]]],
    t7i = [
      3,
      De,
      KQa,
      0,
      [Dr, Za, lj, Ll, Jr, gWa],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: Qxe }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [6, { [xe]: kZa }],
      ],
    ],
    r7i = [3, De, K1t, 0, [RA], [0]],
    K5r = [3, De, QK, 0, [dht, ZS], [[() => Lht, { [lr]: cht }], () => CI]],
    n7i = [3, De, eTi, 0, [ZS], [0]],
    i7i = [3, De, jQa, 0, [O0, Kde], [0, [() => QN, { [zo]: 1, [lr]: Nv }]]],
    xht = [3, De, gxe, 0, [Kp, $N, YDi], [0, [() => qPi, 0], () => EPi]],
    o7i = [3, De, QQa, 0, [zDi], [() => s7i]],
    s7i = [3, De, rGa, 0, [qTi, sGa, Dr, O0], [0, 0, 0, 0]],
    a7i = [3, De, sTi, 0, [m5r], [[() => neu, { [zo]: 1 }]]],
    u7i = [3, De, Dr, 0, [HK, EGa, r5r, e5r], [0, 4, 0, 0]],
    c7i = [-3, De, oGa, { [C9]: v9, [hy]: 409 }, [], []];
  IA.TypeRegistry.for(De).registerError(c7i, F1t);
  var l7i = [-3, De, aGa, { [C9]: v9, [hy]: 409 }, [], []];
  IA.TypeRegistry.for(De).registerError(l7i, U1t);
  var m7i = [3, De, uGa, 0, [Yqa, Uxe], [0, 0]],
    d7i = [3, De, cGa, 0, [Fxe], [[() => jPi, { [zo]: 1, [lr]: zde }]]],
    f7i = [3, De, X1t, 0, [C5r], [[() => r8r, 0]]],
    p7i = [3, De, lTi, 0, [f5, p5, h5, g5, b5, py], [0, 0, 0, 0, 0, 0]],
    h7i = [3, De, BGa, 0, [O0], [0]],
    g7i = [3, De, wGa, 0, [bht], [[() => eeu, { [zo]: 1, [lr]: Aht }]]],
    b7i = [3, De, FGa, 0, [v3, f5, p5, h5, g5, b5, VK], [0, 0, 0, 0, 0, 0, 1]],
    A7i = [
      3,
      De,
      xGa,
      { [lr]: DGa },
      [nft, Dr, Za, yI, v3, f5, p5, h5, g5, b5, py, E9, bl, A5, d5, rm],
      [
        0,
        0,
        0,
        [0, { [xe]: Gxe }],
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        [0, { [xe]: gy }],
        [0, { [xe]: vI }],
        [() => Kg, { [xe]: by }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Lm }],
      ],
    ],
    y7i = [
      3,
      De,
      IGa,
      0,
      [Dr, Za, lDi, lj, f5, p5, h5, g5, b5, py, Wza, Ll, Jr, jde, Lxe, Jp, Ov, Xp],
      [
        [0, 1],
        [0, 1],
        [() => g7i, { [Yu]: 1, [lr]: mTi }],
        [0, { [_n]: Qxe }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, { [xe]: Zde }],
        [1, { [xe]: BZa }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [0, { [xe]: qK }],
        [0, { [xe]: Qde }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
      ],
    ],
    _7i = [3, De, wTi, 0, [aWa, QWa], [0, 0]],
    E7i = [3, De, vGa, 0, [], []],
    v7i = [
      3,
      De,
      NGa,
      0,
      [fTi, yI, STi, bl, E9, Jp, Xp, A5, jN, d5, rm],
      [
        [() => S7i, 16],
        [0, { [xe]: Gxe }],
        [0, { [xe]: HIi }],
        [0, { [xe]: vI }],
        [0, { [xe]: gy }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Lm }],
      ],
    ],
    C7i = [
      3,
      De,
      PGa,
      0,
      [
        Ide,
        Dr,
        Rde,
        Ou,
        kde,
        Ode,
        Nde,
        Pde,
        gTi,
        bTi,
        ATi,
        yTi,
        _Ti,
        KS,
        Lde,
        Mde,
        Fde,
        Ude,
        jde,
        Lxe,
        Za,
        Gde,
        qza,
        zJa,
        E9,
        kA,
        $xe,
        Jp,
        Ov,
        Xp,
        A5,
        jN,
        d5,
        ETi,
        a5r,
        vTi,
        Ll,
        JS,
        Vde,
        Wde,
        Hde,
        Jr,
        MTi,
      ],
      [
        [0, { [xe]: Xde }],
        [0, 1],
        [0, { [xe]: Txe }],
        [0, { [xe]: G5r }],
        [0, { [xe]: Dxe }],
        [0, { [xe]: Ixe }],
        [0, { [xe]: Rxe }],
        [0, { [xe]: Nxe }],
        [0, { [xe]: MIi }],
        [0, { [xe]: FIi }],
        [4, { [xe]: UIi }],
        [0, { [xe]: $Ii }],
        [4, { [xe]: jIi }],
        [4, { [xe]: KS }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: n1e }],
        [0, { [xe]: qK }],
        [0, { [xe]: Qde }],
        [0, 1],
        [128, { [Jde]: i1e }],
        [0, { [xe]: PZa }],
        [0, { [xe]: KZa }],
        [0, { [xe]: gy }],
        [0, { [xe]: Wxe }],
        [0, { [xe]: zxe }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [0, { [xe]: QIi }],
        [() => XIi, { [xe]: GIi }],
        [0, { [xe]: qIi }],
        [0, { [xe]: Fl }],
        [0, { [xe]: W5r }],
        [0, { [xe]: Hxe }],
        [5, { [xe]: Vxe }],
        [0, { [xe]: qxe }],
        [0, { [xe]: Xr }],
        [0, { [xe]: KIi }],
      ],
    ],
    S7i = [3, De, fTi, 0, [v3, EI, py, f5, p5, h5, g5, b5], [0, 4, 0, 0, 0, 0, 0, 0]],
    w7i = [3, De, pTi, 0, [v3, EI, f5, p5, h5, g5, b5], [0, 4, 0, 0, 0, 0, 0]],
    x7i = [3, De, Z1t, 0, [i5r], [[() => $Pi, { [zo]: 1, [lr]: o5r }]]],
    T7i = [
      3,
      De,
      o5r,
      0,
      [$de, qQa, WQa, XQa, rHa, Qza],
      [
        0,
        [64, { [zo]: 1, [lr]: HQa }],
        [64, { [zo]: 1, [lr]: JQa }],
        [64, { [zo]: 1, [lr]: ZQa }],
        [64, { [zo]: 1, [lr]: nHa }],
        1,
      ],
    ],
    D7i = [3, De, H2r, 0, [W2r, nft, Dr, Kde], [0, () => OOi, () => m7i, [() => QN, 0]]],
    I7i = [
      3,
      De,
      gGa,
      0,
      [Dr, pd, Ou, Y2r, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => NOi, { [Yu]: 1, [lr]: Y2r }],
        [0, { [xe]: Xr }],
      ],
    ],
    R7i = [
      3,
      De,
      AGa,
      0,
      [Dr, pd, Ou, K2r, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => LOi, { [Yu]: 1, [lr]: K2r }],
        [0, { [xe]: Xr }],
      ],
    ],
    k7i = [
      3,
      De,
      yGa,
      0,
      [nft, e5r],
      [
        [0, { [xe]: nft }],
        [0, { [xe]: PIi }],
      ],
    ],
    O7i = [
      3,
      De,
      _Ga,
      0,
      [Ide, Dr, H2r, Lde, Mde, Fde, h5r, Ude, gYa, vDi],
      [
        [0, { [xe]: Xde }],
        [0, 1],
        [() => D7i, { [Yu]: 1, [lr]: H2r }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: q5r }],
        [0, { [xe]: n1e }],
        [2, { [xe]: GXa }],
        [0, { [xe]: FZa }],
      ],
    ],
    N7i = [
      3,
      De,
      TGa,
      { [lr]: yWa },
      [tTi, iTi, Dr, Za, lj, E9, Jp, Xp, A5, jN, d5, rm, Ou, py],
      [
        [4, { [xe]: OIi }],
        [0, { [xe]: NIi }],
        [0, { [lr]: Dr }],
        0,
        0,
        [0, { [xe]: gy }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Lm }],
        [0, { [xe]: G5r }],
        [0, { [xe]: Zde }],
      ],
    ],
    P7i = [
      3,
      De,
      RGa,
      0,
      [
        Ide,
        Dr,
        Rde,
        kde,
        Ode,
        Nde,
        Pde,
        KS,
        Lde,
        Mde,
        Fde,
        Ude,
        Za,
        Gde,
        E9,
        kA,
        $xe,
        Jp,
        Ov,
        Xp,
        A5,
        jN,
        d5,
        Ll,
        JS,
        Vde,
        Wde,
        Hde,
        Jr,
        Ou,
        py,
      ],
      [
        [0, { [xe]: Xde }],
        [0, 1],
        [0, { [xe]: Txe }],
        [0, { [xe]: Dxe }],
        [0, { [xe]: Ixe }],
        [0, { [xe]: Rxe }],
        [0, { [xe]: Nxe }],
        [4, { [xe]: KS }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: n1e }],
        [0, 1],
        [128, { [Jde]: i1e }],
        [0, { [xe]: gy }],
        [0, { [xe]: Wxe }],
        [0, { [xe]: zxe }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Fl }],
        [0, { [xe]: W5r }],
        [0, { [xe]: Hxe }],
        [5, { [xe]: Vxe }],
        [0, { [xe]: qxe }],
        [0, { [xe]: Xr }],
        [0, { [xe]: G5r }],
        [0, { [xe]: Zde }],
      ],
    ],
    B7i = [
      3,
      De,
      $Ga,
      { [lr]: jGa },
      [E9, A5, jN, d5, Vxi],
      [
        [0, { [xe]: gy }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [() => fPi, { [lr]: Vxi }],
      ],
    ],
    L7i = [
      3,
      De,
      GGa,
      0,
      [RJa, Dr, E9, A5, jN, d5],
      [
        [0, { [xe]: VXa }],
        [0, 1],
        [0, { [xe]: gy }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
      ],
    ],
    M7i = [3, De, qGa, 0, [cHa, KGa, BDi, R5r, QTi, NDi, tGa], [0, 0, 0, 0, 0, 0, 2]],
    F7i = [3, De, HGa, 0, [qKa, BDi, R5r, QTi, NDi], [0, 0, 0, 0, 0]],
    U7i = [3, De, ITi, 0, [pDi, Bde, CXa], [0, 1, 1]],
    $7i = [3, De, V2r, 0, [DYa, $Ka], [[() => feu, { [zo]: 1, [lr]: wDi }], 2]],
    j7i = [
      3,
      De,
      tqa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    Q7i = [
      3,
      De,
      nqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    G7i = [
      3,
      De,
      oqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    q7i = [
      3,
      De,
      cqa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    H7i = [
      3,
      De,
      aqa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    V7i = [
      3,
      De,
      mqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    W7i = [
      3,
      De,
      fqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    z7i = [
      3,
      De,
      bqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    Y7i = [
      3,
      De,
      pqa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    K7i = [
      3,
      De,
      yqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    J7i = [
      3,
      De,
      Eqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    X7i = [
      3,
      De,
      Cqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    Z7i = [
      3,
      De,
      vqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    eRi = [
      3,
      De,
      xqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    tRi = [
      3,
      De,
      Dqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    rRi = [3, De, Lqa, 0, [Za, bl, GK, Bqa], [0, 0, 2, 0]],
    nRi = [3, De, Pqa, 0, [ZS, Za, bl, KTi, EI], [() => CI, 0, 0, 2, 4]],
    iRi = [3, De, TTi, 0, [RA], [0]],
    oRi = [
      3,
      De,
      Mqa,
      0,
      [GK, bl, rm],
      [
        [2, { [xe]: wht }],
        [0, { [xe]: vI }],
        [0, { [xe]: Lm }],
      ],
    ],
    sRi = [
      3,
      De,
      Uqa,
      0,
      [Dr, Za, w5r, bl, Ll, t5r, Jr, jde, bWa, AWa],
      [
        [0, 1],
        [0, 1],
        [0, { [xe]: H5r }],
        [0, { [_n]: S9 }],
        [0, { [xe]: Fl }],
        [2, { [xe]: Q5r }],
        [0, { [xe]: Xr }],
        [0, { [xe]: qK }],
        [6, { [xe]: OZa }],
        [1, { [xe]: NZa }],
      ],
    ],
    aRi = [
      3,
      De,
      Fqa,
      { [lr]: Kqa },
      [Jqa, rm, $Ti],
      [
        [() => teu, { [zo]: 1 }],
        [0, { [xe]: Lm }],
        [() => ieu, { [zo]: 1, [lr]: Bxe }],
      ],
    ],
    uRi = [
      3,
      De,
      $qa,
      0,
      [Dr, V2r, w5r, Ll, t5r, Jr, Ou],
      [
        [0, 1],
        [() => $7i, { [Yu]: 1, [lr]: V2r }],
        [0, { [xe]: H5r }],
        [0, { [xe]: Fl }],
        [2, { [xe]: Q5r }],
        [0, { [xe]: Xr }],
        [0, { [xe]: a0 }],
      ],
    ],
    cRi = [3, De, Qqa, 0, [bl], [[0, { [xe]: vI }]]],
    lRi = [
      3,
      De,
      Gqa,
      0,
      [Dr, Za, bl, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: Xr }],
      ],
    ],
    mRi = [
      3,
      De,
      zqa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    dRi = [3, De, mht, 0, [Dr, $Qa, kA, eTi, Pxe, HDi, fDi], [0, 0, 0, () => n7i, () => hRi, () => KNi, () => FOi]],
    fRi = [3, De, RTi, 0, [HJa, L5r, cIi], [0, 0, 0]],
    pRi = [3, De, d5r, 0, [m5r, $Wa, UWa], [0, [() => Kg, 0], 0]],
    hRi = [3, De, Pxe, 0, [zKa], [0]],
    gRi = [-3, De, sHa, { [C9]: v9, [hy]: 400 }, [], []];
  IA.TypeRegistry.for(De).registerError(gRi, q1t);
  var bRi = [3, De, tHa, 0, [], []],
    ARi = [3, De, Bxe, 0, [Za, bl, YGa, Kza], [0, 0, 0, 0]],
    Tht = [3, De, eHa, 0, [PTi, BTi], [0, 0]],
    J5r = [3, De, l5r, 0, [Za], [0]],
    yRi = [3, De, NTi, 0, [], []],
    _Ri = [3, De, LTi, 0, [RA], [0]],
    ERi = [3, De, GTi, 0, [HK, U5r], [0, 0]],
    vRi = [3, De, vHa, 0, [J1t], [[() => Y5r, 16]]],
    CRi = [
      3,
      De,
      SHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    SRi = [3, De, bHa, { [lr]: K1t }, [RA, rm], [0, [0, { [xe]: Lm }]]],
    wRi = [
      3,
      De,
      yHa,
      0,
      [Dr, Jr, Ll],
      [
        [0, 1],
        [0, { [xe]: Xr }],
        [0, { [xe]: Fl }],
      ],
    ],
    xRi = [3, De, CHa, { [lr]: QK }, [ZS, dht], [() => CI, [() => Lht, { [lr]: cht }]]],
    TRi = [
      3,
      De,
      wHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    DRi = [3, De, AHa, 0, [gxe], [[() => xht, 16]]],
    IRi = [
      3,
      De,
      _Ha,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    RRi = [3, De, DHa, { [lr]: Z1t }, [i5r], [[() => $Pi, { [zo]: 1, [lr]: o5r }]]],
    kRi = [
      3,
      De,
      IHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    ORi = [3, De, kHa, 0, [pft], [[() => p8r, 16]]],
    NRi = [
      3,
      De,
      OHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    PRi = [3, De, MHa, 0, [Axe], [[() => Dht, 16]]],
    BRi = [
      3,
      De,
      FHa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    LRi = [3, De, PHa, 0, [bxe], [[() => Iht, 16]]],
    MRi = [
      3,
      De,
      BHa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    FRi = [
      3,
      De,
      jHa,
      { [lr]: z2r },
      [Fxe, F5r],
      [
        [() => jPi, { [zo]: 1, [lr]: zde }],
        [0, { [xe]: z5r }],
      ],
    ],
    URi = [
      3,
      De,
      QHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    $Ri = [3, De, GHa, { [lr]: W2r }, [W2r], [0]],
    jRi = [
      3,
      De,
      HHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    QRi = [3, De, qHa, { [lr]: X1t }, [C5r], [[() => r8r, 0]]],
    GRi = [
      3,
      De,
      VHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    qRi = [3, De, YHa, 0, [HTi], [[() => VRi, 16]]],
    HRi = [
      3,
      De,
      JHa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    VRi = [3, De, HTi, 0, [oDi], [() => POi]],
    WRi = [3, De, tVa, 0, [VTi], [[() => YRi, 16]]],
    zRi = [
      3,
      De,
      rVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    YRi = [3, De, VTi, 0, [cDi, RA, Bxe], [() => MOi, 0, () => Tht]],
    KRi = [3, De, KHa, 0, [yxe], [[() => kht, 16]]],
    JRi = [
      3,
      De,
      XHa,
      0,
      [Dr, Kp, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
      ],
    ],
    XRi = [
      3,
      De,
      iVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    ZRi = [3, De, sVa, 0, [oft], [[() => u8r, 16]]],
    eki = [
      3,
      De,
      aVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    tki = [3, De, cVa, 0, [RDi], [[0, 16]]],
    rki = [
      3,
      De,
      lVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    nki = [3, De, dVa, 0, [xDi], [[() => oNi, 16]]],
    iki = [
      3,
      De,
      fVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    oki = [3, De, hVa, 0, [cft], [[() => m8r, 16]]],
    ski = [
      3,
      De,
      yVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    aki = [3, De, bVa, { [lr]: lft }, [TDi], [0]],
    uki = [
      3,
      De,
      AVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    cki = [3, De, EVa, { [lr]: JS }, [Eht], [[() => QN, 0]]],
    lki = [
      3,
      De,
      vVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    mki = [3, De, SVa, { [lr]: hft }, [RA, uDi], [0, [0, { [lr]: sDi }]]],
    dki = [
      3,
      De,
      wVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    fki = [3, De, TVa, { [lr]: gft }, [I5r, A5r, l5r, k5r], [() => l8r, () => Z5r, () => J5r, [() => GPi, 0]]],
    pki = [
      3,
      De,
      DVa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    hki = [3, De, kVa, { [lr]: QK }, [ZS, dht, rm], [() => CI, [() => Lht, { [lr]: cht }], [0, { [xe]: Lm }]]],
    gki = [
      3,
      De,
      PVa,
      0,
      [Dr, Za, bl, Ll, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
      ],
    ],
    bki = [
      3,
      De,
      OVa,
      { [lr]: BVa },
      [GK, EI, bl, rm, v3, lTi, vYa, kA, SYa],
      [
        [2, { [xe]: wht }],
        [4, { [xe]: S5r }],
        [0, { [xe]: vI }],
        [0, { [xe]: Lm }],
        0,
        () => p7i,
        [() => Aki, 0],
        0,
        1,
      ],
    ],
    Aki = [
      3,
      De,
      NVa,
      0,
      [eXa, ght, ADi, pht, _I, bht],
      [[1, { [lr]: hht }], 0, 0, 1, 2, [() => beu, { [zo]: 1, [lr]: Aht }]],
    ],
    yki = [
      3,
      De,
      LVa,
      0,
      [Dr, Za, bl, pht, ght, Jp, Ov, Xp, Ll, Jr, uYa],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [1, { [xe]: LZa }],
        [0, { [xe]: $Za }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [64, { [xe]: MZa }],
      ],
    ],
    _ki = [3, De, QVa, 0, [ift], [[() => o8r, { [Yu]: 1, [lr]: ift }]]],
    Eki = [
      3,
      De,
      GVa,
      0,
      [Dr, Za, bl, Ll, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
      ],
    ],
    vki = [3, De, UVa, 0, [sft], [[() => i8r, 16]]],
    Cki = [
      3,
      De,
      $Va,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    Ski = [
      3,
      De,
      qVa,
      0,
      [
        xxe,
        GK,
        Z2r,
        yI,
        P5r,
        EI,
        Oxe,
        v3,
        f5,
        p5,
        h5,
        g5,
        b5,
        py,
        x5r,
        bl,
        Rde,
        kde,
        Ode,
        Nde,
        s5r,
        Pde,
        KS,
        eft,
        $xe,
        E9,
        Gde,
        Jp,
        Xp,
        A5,
        d5,
        kA,
        rm,
        O5r,
        hht,
        M5r,
        Vde,
        Wde,
        Hde,
      ],
      [
        [() => Yxe, 16],
        [2, { [xe]: wht }],
        [0, { [xe]: yIi }],
        [0, { [xe]: Gxe }],
        [0, { [xe]: zIi }],
        [4, { [xe]: S5r }],
        [1, { [xe]: kxe }],
        [0, { [xe]: v3 }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, { [xe]: Zde }],
        [1, { [xe]: VIi }],
        [0, { [xe]: vI }],
        [0, { [xe]: Txe }],
        [0, { [xe]: Dxe }],
        [0, { [xe]: Ixe }],
        [0, { [xe]: Rxe }],
        [0, { [xe]: hTi }],
        [0, { [xe]: Nxe }],
        [4, { [xe]: KS }],
        [0, { [xe]: eft }],
        [0, { [xe]: zxe }],
        [0, { [xe]: gy }],
        [128, { [Jde]: i1e }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Wxe }],
        [0, { [xe]: Lm }],
        [0, { [xe]: YIi }],
        [1, { [xe]: WIi }],
        [1, { [xe]: JIi }],
        [0, { [xe]: Hxe }],
        [5, { [xe]: Vxe }],
        [0, { [xe]: qxe }],
      ],
    ],
    wki = [
      3,
      De,
      HVa,
      0,
      [Dr, jde, JTi, Lxe, eDi, Za, mft, LDi, MDi, FDi, UDi, $Di, jDi, bl, Jp, Ov, Xp, Ll, VK, Jr, dTi],
      [
        [0, 1],
        [0, { [xe]: qK }],
        [4, { [xe]: y5r }],
        [0, { [xe]: Qde }],
        [4, { [xe]: E5r }],
        [0, 1],
        [0, { [xe]: mft }],
        [0, { [_n]: vIi }],
        [0, { [_n]: CIi }],
        [0, { [_n]: SIi }],
        [0, { [_n]: wIi }],
        [0, { [_n]: xIi }],
        [6, { [_n]: TIi }],
        [0, { [_n]: S9 }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [0, { [xe]: Fl }],
        [1, { [_n]: Sht }],
        [0, { [xe]: Xr }],
        [0, { [xe]: LIi }],
      ],
    ],
    xki = [3, De, VVa, 0, [dft], [[() => s8r, { [Yu]: 1, [lr]: dft }]]],
    Tki = [
      3,
      De,
      WVa,
      0,
      [Dr, Za, bl, Ll, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
      ],
    ],
    Dki = [
      3,
      De,
      KVa,
      { [lr]: JS },
      [bl, Eht],
      [
        [0, { [xe]: vI }],
        [() => QN, 0],
      ],
    ],
    Iki = [
      3,
      De,
      XVa,
      0,
      [Dr, Za, bl, Jr, Ll],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: Xr }],
        [0, { [xe]: Fl }],
      ],
    ],
    Rki = [
      3,
      De,
      JVa,
      0,
      [xxe, rm],
      [
        [() => Yxe, 16],
        [0, { [xe]: Lm }],
      ],
    ],
    kki = [
      3,
      De,
      ZVa,
      0,
      [Dr, Za, Ll, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
      ],
    ],
    Oki = [3, De, rWa, 0, [aft], [[() => c8r, 16]]],
    Nki = [
      3,
      De,
      nWa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    Pki = [3, De, WTi, 0, [dIi], [0]],
    Bki = [3, De, g5r, 0, [b5r, IDi], [[() => X5r, { [kIi]: [RIi, _Ii] }], 0]],
    X5r = [3, De, b5r, 0, [c5r, Zqa, $de, gXa, Uxe], [0, 0, 0, 0, [0, { [FXa]: 1, [lr]: XZa }]]],
    Lki = [
      3,
      De,
      oWa,
      0,
      [e5r, mGa, lGa, r5r, eGa],
      [
        [0, { [xe]: PIi }],
        [0, { [xe]: QXa }],
        [0, { [xe]: jXa }],
        [0, { [xe]: qXa }],
        [2, { [xe]: UXa }],
      ],
    ],
    Mki = [
      3,
      De,
      sWa,
      0,
      [Dr, Jr],
      [
        [0, 1],
        [0, { [xe]: Xr }],
      ],
    ],
    Fki = [
      3,
      De,
      cWa,
      0,
      [
        GK,
        Z2r,
        yI,
        P5r,
        iGa,
        EI,
        Oxe,
        f5,
        p5,
        h5,
        g5,
        b5,
        py,
        v3,
        x5r,
        bl,
        Rde,
        kde,
        Ode,
        Nde,
        Pde,
        s5r,
        KS,
        eft,
        $xe,
        E9,
        Gde,
        Jp,
        Xp,
        A5,
        d5,
        kA,
        rm,
        O5r,
        hht,
        M5r,
        Vde,
        Wde,
        Hde,
      ],
      [
        [2, { [xe]: wht }],
        [0, { [xe]: yIi }],
        [0, { [xe]: Gxe }],
        [0, { [xe]: zIi }],
        [0, { [xe]: $Xa }],
        [4, { [xe]: S5r }],
        [1, { [xe]: kxe }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, { [xe]: Zde }],
        [0, { [xe]: v3 }],
        [1, { [xe]: VIi }],
        [0, { [xe]: vI }],
        [0, { [xe]: Txe }],
        [0, { [xe]: Dxe }],
        [0, { [xe]: Ixe }],
        [0, { [xe]: Rxe }],
        [0, { [xe]: Nxe }],
        [0, { [xe]: hTi }],
        [4, { [xe]: KS }],
        [0, { [xe]: eft }],
        [0, { [xe]: zxe }],
        [0, { [xe]: gy }],
        [128, { [Jde]: i1e }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Wxe }],
        [0, { [xe]: Lm }],
        [0, { [xe]: YIi }],
        [1, { [xe]: WIi }],
        [1, { [xe]: JIi }],
        [0, { [xe]: Hxe }],
        [5, { [xe]: Vxe }],
        [0, { [xe]: qxe }],
      ],
    ],
    Uki = [
      3,
      De,
      lWa,
      0,
      [Dr, jde, JTi, Lxe, eDi, Za, mft, LDi, MDi, FDi, UDi, $Di, jDi, bl, Jp, Ov, Xp, Ll, VK, Jr, dTi],
      [
        [0, 1],
        [0, { [xe]: qK }],
        [4, { [xe]: y5r }],
        [0, { [xe]: Qde }],
        [4, { [xe]: E5r }],
        [0, 1],
        [0, { [xe]: mft }],
        [0, { [_n]: vIi }],
        [0, { [_n]: CIi }],
        [0, { [_n]: SIi }],
        [0, { [_n]: wIi }],
        [0, { [_n]: xIi }],
        [6, { [_n]: TIi }],
        [0, { [_n]: S9 }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [0, { [xe]: Fl }],
        [1, { [_n]: Sht }],
        [0, { [xe]: Xr }],
        [0, { [xe]: LIi }],
      ],
    ],
    $ki = [-3, De, CWa, { [C9]: v9, [hy]: 400 }, [], []];
  IA.TypeRegistry.for(De).registerError($ki, z1t);
  var Z5r = [3, De, A5r, 0, [QJa], [0]],
    e8r = [3, De, v5r, 0, [$de, c5r], [0, 0]],
    t8r = [3, De, _5r, 0, [CTi, zGa, tDi, FKa], [() => M7i, 0, () => nOi, () => rNi]],
    jki = [3, De, DWa, 0, [O0, Kde], [0, [() => QN, { [zo]: 1, [lr]: Nv }]]],
    Dht = [3, De, Axe, 0, [Kp, $N, RA, tXa], [0, [() => Qki, 0], 0, [() => veu, { [zo]: 1, [lr]: fIi }]]],
    Qki = [3, De, RWa, 0, [O0, Nv, wxe], [0, () => ZK, [() => jki, 0]]],
    Gki = [-3, De, EWa, { [C9]: v9, [hy]: 403 }, [kA, oTi], [0, 0]];
  IA.TypeRegistry.for(De).registerError(Gki, j1t);
  var qki = [-3, De, SWa, { [C9]: v9, [hy]: 400 }, [], []];
  IA.TypeRegistry.for(De).registerError(qki, H1t);
  var Hki = [-3, De, kWa, { [C9]: v9, [hy]: 400 }, [], []];
  IA.TypeRegistry.for(De).registerError(Hki, V1t);
  var Iht = [
      3,
      De,
      bxe,
      0,
      [mht, fWa, $N, Kp, vWa, dYa, $Ja],
      [[() => Vki, 0], 2, () => zki, 0, 0, [() => ueu, 0], () => Kki],
    ],
    Vki = [3, De, dWa, 0, [zDi], [[() => Yki, 0]]],
    Wki = [
      3,
      De,
      pWa,
      0,
      [nIi, rIi],
      [
        [() => APi, { [lr]: eIi }],
        [() => gPi, { [lr]: KDi }],
      ],
    ],
    zki = [3, De, hWa, 0, [O0], [0]],
    Yki = [3, De, xWa, 0, [VQa, Dr, qTi, O0, d5r], [0, 0, 0, 0, [() => Wki, 0]]],
    Kki = [3, De, TWa, 0, [pHa], [0]],
    Jki = [3, De, tft, 0, [u5r, Pxe], [0, () => Rht]],
    Xki = [3, De, ZTi, 0, [u5r, mIi, Bxe, _ht, B5r], [0, 0, () => Tht, 0, 0]],
    Zki = [3, De, IWa, 0, [u5r, Pxe], [0, () => Rht]],
    eOi = [3, De, rft, 0, [yht, Pxe], [() => Nht, () => Rht]],
    tOi = [3, De, rDi, 0, [mIi, Bxe, _ht, B5r, yht], [0, () => Tht, 0, 0, () => Nht]],
    rOi = [3, De, BWa, 0, [yht], [() => Nht]],
    nOi = [3, De, NWa, 0, [Uxe], [0]],
    iOi = [3, De, PWa, 0, [R5r], [0]],
    oOi = [3, De, dza, 0, [Kp, mza, f5r, $N], [0, [0, { [lr]: CGa }], [64, { [zo]: 1, [lr]: p5r }], [() => Oht, 0]]],
    sOi = [3, De, lza, 0, [kTi, Bde, iHa], [5, 1, 2]],
    aOi = [
      3,
      De,
      Lza,
      0,
      [yI, $de, O0, $N, RA, iXa, sYa, yDi, rTi],
      [
        () => sOi,
        0,
        0,
        [() => cOi, 0],
        0,
        [() => Seu, { [zo]: 1, [lr]: hIi }],
        [() => deu, { [zo]: 1, [lr]: _Di }],
        () => jOi,
        () => ZIi,
      ],
    ],
    uOi = [3, De, Mza, 0, [O0, Kde, CDi, SDi], [0, [() => QN, { [zo]: 1, [lr]: Nv }], 1, 1]],
    cOi = [3, De, Fza, 0, [O0, Nv, CDi, SDi, wxe], [0, () => ZK, 1, 1, [() => uOi, 0]]],
    lOi = [3, De, WWa, { [lr]: zWa }, [_I, _9, Mxe, Zxi], [2, 0, 0, [() => ZZa, { [zo]: 1, [lr]: gxe }]]],
    mOi = [
      3,
      De,
      YWa,
      0,
      [Dr, _9, Jr],
      [
        [0, 1],
        [0, { [_n]: WK }],
        [0, { [xe]: Xr }],
      ],
    ],
    dOi = [3, De, eza, 0, [_I, _9, Mxe, XTi], [2, 0, 0, [() => seu, { [zo]: 1, [lr]: Axe }]]],
    fOi = [
      3,
      De,
      tza,
      0,
      [Dr, _9, Jr],
      [
        [0, 1],
        [0, { [_n]: WK }],
        [0, { [xe]: Xr }],
      ],
    ],
    pOi = [3, De, JWa, { [lr]: gza }, [_9, YTi, _I, Mxe], [0, [() => aeu, { [zo]: 1, [lr]: bxe }], 2, 0]],
    hOi = [
      3,
      De,
      XWa,
      0,
      [Dr, _9, Jr],
      [
        [0, 1],
        [0, { [_n]: WK }],
        [0, { [xe]: Xr }],
      ],
    ],
    gOi = [3, De, nza, { [lr]: bza }, [_I, _9, Mxe, iDi], [2, 0, 0, [() => leu, { [zo]: 1, [lr]: yxe }]]],
    bOi = [
      3,
      De,
      iza,
      0,
      [Dr, _9, Jr],
      [
        [0, 1],
        [0, { [_n]: WK }],
        [0, { [xe]: Xr }],
      ],
    ],
    AOi = [3, De, oza, { [lr]: GWa }, [n5r, ZS, _9, O0], [[() => UPi, 0], () => CI, 0, 0]],
    yOi = [
      3,
      De,
      sza,
      0,
      [Gza, _9, O0, r5r],
      [
        [1, { [_n]: RXa }],
        [0, { [_n]: WK }],
        [0, { [_n]: jxe }],
        [0, { [_n]: SXa }],
      ],
    ],
    _Oi = [3, De, uza, { [lr]: qWa }, [n5r, _9], [[() => UPi, 0], 0]],
    EOi = [
      3,
      De,
      cza,
      0,
      [_9, Hza],
      [
        [0, { [_n]: WK }],
        [1, { [_n]: kXa }],
      ],
    ],
    vOi = [
      3,
      De,
      _za,
      { [lr]: Eza },
      [Dr, fht, gIi, gDi, O0, uj, iYa, mDi, _I, oXa, lht, cj, rm],
      [0, 0, 0, 0, 0, 0, 0, 1, 2, [() => meu, { [zo]: 1, [lr]: bXa }], [() => Bht, { [zo]: 1 }], 0, [0, { [xe]: Lm }]],
    ],
    COi = [
      3,
      De,
      vza,
      0,
      [Dr, uj, cj, fht, mDi, O0, gIi, Jr, Ll],
      [
        [0, 1],
        [0, { [_n]: vht }],
        [0, { [_n]: Cht }],
        [0, { [_n]: EIi }],
        [1, { [_n]: NXa }],
        [0, { [_n]: jxe }],
        [0, { [_n]: LXa }],
        [0, { [xe]: Xr }],
        [0, { [xe]: Fl }],
      ],
    ],
    SOi = [
      3,
      De,
      Sza,
      { [lr]: nDi },
      [_I, dDi, eYa, xTi, HK, O0, uj, qde, lht, cj, rm],
      [2, 0, 0, [() => QPi, { [zo]: 1 }], 0, 0, 0, 1, [() => Bht, { [zo]: 1 }], 0, [0, { [xe]: Lm }]],
    ],
    wOi = [
      3,
      De,
      wza,
      0,
      [Dr, uj, cj, dDi, qde, O0, Ll, Jr, T5r],
      [
        [0, 1],
        [0, { [_n]: vht }],
        [0, { [_n]: Cht }],
        [0, { [_n]: IXa }],
        [1, { [_n]: j5r }],
        [0, { [_n]: jxe }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [64, { [xe]: V5r }],
      ],
    ],
    xOi = [
      3,
      De,
      Tza,
      { [lr]: nDi },
      [_I, xTi, HK, O0, uj, qde, lht, cj, LWa, _9, Mxe, WDi, rm],
      [2, [() => QPi, { [zo]: 1 }], 0, 0, 0, 1, [() => Bht, { [zo]: 1 }], 0, 1, 0, 0, 0, [0, { [xe]: Lm }]],
    ],
    TOi = [
      3,
      De,
      Iza,
      0,
      [Dr, uj, cj, qde, O0, _9, lHa, WDi, Ll, Jr, T5r],
      [
        [0, 1],
        [0, { [_n]: vht }],
        [0, { [_n]: Cht }],
        [1, { [_n]: j5r }],
        [0, { [_n]: jxe }],
        [0, { [_n]: WK }],
        [2, { [_n]: xXa }],
        [0, { [_n]: BXa }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [64, { [xe]: V5r }],
      ],
    ],
    DOi = [
      3,
      De,
      Dza,
      { [lr]: $za },
      [_I, fht, AIi, gDi, oYa, AXa, DTi, HK, O0, uj, qde, lht, cj, rm],
      [
        2,
        0,
        0,
        0,
        0,
        [() => peu, { [zo]: 1, [lr]: yXa }],
        [() => reu, { [zo]: 1, [lr]: GK }],
        0,
        0,
        0,
        1,
        [() => Bht, { [zo]: 1 }],
        0,
        [0, { [xe]: Lm }],
      ],
    ],
    IOi = [
      3,
      De,
      Rza,
      0,
      [Dr, uj, cj, fht, qde, O0, AIi, Jr, Ll, T5r],
      [
        [0, 1],
        [0, { [_n]: vht }],
        [0, { [_n]: Cht }],
        [0, { [_n]: EIi }],
        [1, { [_n]: j5r }],
        [0, { [_n]: jxe }],
        [0, { [_n]: MXa }],
        [0, { [xe]: Xr }],
        [0, { [xe]: Fl }],
        [64, { [xe]: V5r }],
      ],
    ],
    ROi = [
      3,
      De,
      Nza,
      { [lr]: Pza },
      [tTi, iTi, Dr, Za, lj, ght, ADi, pht, _I, bht, v5r, ZS, kA, rm, Ou, py],
      [
        [4, { [xe]: OIi }],
        [0, { [xe]: NIi }],
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        [() => geu, { [zo]: 1, [lr]: Aht }],
        () => e8r,
        () => CI,
        0,
        [0, { [xe]: Lm }],
        0,
        0,
      ],
    ],
    kOi = [
      3,
      De,
      Bza,
      0,
      [Dr, Za, pht, ght, lj, Ll, Jr, Jp, Ov, Xp],
      [
        [0, 1],
        [0, 1],
        [1, { [_n]: OXa }],
        [0, { [_n]: PXa }],
        [0, { [_n]: Qxe }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
      ],
    ],
    OOi = [3, De, hza, 0, [Uxe, HK], [0, 0]],
    r8r = [3, De, C5r, 0, [qJa, uIi, ZJa, lIi], [0, [() => Eeu, 0], 0, [() => SPi, 0]]],
    NOi = [3, De, Y2r, 0, [rft, tft], [() => eOi, () => Jki]],
    POi = [3, De, oDi, 0, [RTi, rDi, ZTi], [() => fRi, () => tOi, () => Xki]],
    BOi = [3, De, aDi, 0, [HK, U5r], [0, 0]],
    LOi = [3, De, K2r, 0, [iIi], [() => oPi]],
    MOi = [3, De, cDi, 0, [oIi], [() => sPi]],
    Rht = [3, De, zza, 0, [hJa, FWa], [0, 0]],
    FOi = [3, De, fDi, 0, [RA, aHa], [0, () => d8r]],
    UOi = [3, De, jza, 0, [O0, Kde, nTi], [0, [() => QN, { [zo]: 1, [lr]: Nv }], 0]],
    kht = [3, De, yxe, 0, [Kp, $N], [0, [() => HPi, 0]]],
    $Oi = [3, De, lDi, 0, [lj, Za, OWa, kA, ZS, v5r, Ou, py], [0, 0, 4, 0, () => CI, () => e8r, 0, 0]],
    jOi = [3, De, yDi, 0, [hDi, bDi], [1, 1]],
    QOi = [3, De, _Di, 0, [hDi, kA, bDi], [1, 0, 1]],
    GOi = [-3, De, tYa, { [C9]: v9, [hy]: 404 }, [], []];
  IA.TypeRegistry.for(De).registerError(GOi, $1t);
  var qOi = [-3, De, rYa, { [C9]: v9, [hy]: 404 }, [], []];
  IA.TypeRegistry.for(De).registerError(qOi, Q1t);
  var HOi = [-3, De, nYa, { [C9]: v9, [hy]: 404 }, [], []];
  IA.TypeRegistry.for(De).registerError(HOi, L1t);
  var VOi = [-3, De, Zza, { [C9]: v9 }, [], []];
  IA.TypeRegistry.for(De).registerError(VOi, G1t);
  var n8r = [
      3,
      De,
      J2r,
      0,
      [WJa, GKa, pza, NTi],
      [
        [() => Ceu, { [zo]: 1, [lr]: aIi }],
        [() => Aeu, { [zo]: 1, [lr]: PDi }],
        [() => ceu, { [zo]: 1, [lr]: SGa }],
        () => yRi,
      ],
    ],
    Oht = [3, De, Xza, 0, [Za], [[() => nPi, { [lr]: DJa }]]],
    WOi = [
      3,
      De,
      wDi,
      0,
      [Za, EI, v3, Ou, py, Yde, kA, ZS, N5r],
      [0, 4, 0, [64, { [zo]: 1 }], 0, 1, 0, () => CI, () => f8r],
    ],
    zOi = [-3, De, cYa, { [C9]: v9, [hy]: 403 }, [], []];
  IA.TypeRegistry.for(De).registerError(zOi, Y1t);
  var YOi = [3, De, fYa, 0, [Za, bl, v3, Aza, Yde], [0, 0, 0, 6, 1]],
    i8r = [3, De, sft, 0, [hYa, zde], [0, () => KOi]],
    o8r = [3, De, bYa, 0, [RA], [0]],
    s8r = [3, De, AYa, 0, [pDi, dJa], [0, 5]],
    KOi = [3, De, yYa, 0, [ITi], [() => U7i]],
    JOi = [-3, De, EYa, { [C9]: v9, [hy]: 403 }, [], []];
  IA.TypeRegistry.for(De).registerError(JOi, M1t);
  var XOi = [3, De, CYa, 0, [VK, Yde, f5, p5, h5, g5, b5], [1, 1, 0, 0, 0, 0, 0]],
    ZOi = [
      3,
      De,
      xYa,
      0,
      [v3, Ou, py, Yde, kA, Za, bl, KTi, EI, ZS, N5r],
      [0, [64, { [zo]: 1 }], 0, 1, 0, 0, 0, 2, 4, () => CI, () => f8r],
    ],
    eNi = [3, De, EDi, 0, [UJa], [[() => iPi, 0]]],
    a8r = [3, De, D5r, 0, [CTi, tDi], [() => F7i, () => iOi]],
    CI = [3, De, ZS, 0, [c5r, $de], [0, 0]],
    u8r = [3, De, oft, 0, [Fxe], [[() => heu, { [zo]: 1, [lr]: zde }]]],
    tNi = [3, De, lYa, 0, [vDi], [0]],
    rNi = [3, De, gKa, 0, [], []],
    nNi = [3, De, Aht, 0, [VK, EI, v3, Yde, f5, p5, h5, g5, b5], [1, 4, 0, 1, 0, 0, 0, 0, 0]],
    iNi = [3, De, uft, { [lr]: uft }, [pKa], [0]],
    oNi = [3, De, xDi, 0, [Wxi], [[2, { [lr]: Wxi }]]],
    sNi = [3, De, kDi, 0, [cTi, aTi, uTi], [1, 1, 1]],
    aNi = [3, De, hKa, 0, [OTi], [[() => sNi, { [$5r]: 1 }]]],
    c8r = [
      3,
      De,
      aft,
      0,
      [qxi, zxi, Hxi, Yxi],
      [
        [2, { [lr]: qxi }],
        [2, { [lr]: zxi }],
        [2, { [lr]: Hxi }],
        [2, { [lr]: Yxi }],
      ],
    ],
    uNi = [
      3,
      De,
      PYa,
      0,
      [Dr, pd, Ou, Jr, J1t],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
        [() => Y5r, { [Yu]: 1, [lr]: J1t }],
      ],
    ],
    cNi = [
      3,
      De,
      kYa,
      0,
      [Dr, K1t, Jr, Ou],
      [
        [0, 1],
        [() => r7i, { [Yu]: 1, [lr]: K1t }],
        [0, { [xe]: Xr }],
        [0, { [xe]: a0 }],
      ],
    ],
    lNi = [
      3,
      De,
      BYa,
      0,
      [Ide, QK, Dr, pd, Ou, Lde, Mde, Fde, h5r, Ude, Jr],
      [
        [0, { [xe]: Xde }],
        [() => K5r, { [Yu]: 1, [lr]: QK }],
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: q5r }],
        [0, { [xe]: n1e }],
        [0, { [xe]: Xr }],
      ],
    ],
    mNi = [
      3,
      De,
      OYa,
      0,
      [Dr, Kp, gxe, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [() => xht, { [Yu]: 1, [lr]: gxe }],
        [0, { [xe]: Xr }],
      ],
    ],
    dNi = [
      3,
      De,
      FYa,
      0,
      [Dr, Z1t, pd, Ou, Jr],
      [
        [0, 1],
        [() => x7i, { [Yu]: 1, [lr]: Z1t }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    fNi = [
      3,
      De,
      $Ya,
      0,
      [Dr, pd, Ou, pft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => p8r, { [Yu]: 1, [lr]: pft }],
        [0, { [xe]: Xr }],
      ],
    ],
    pNi = [
      3,
      De,
      qYa,
      0,
      [Dr, Kp, Jr, Axe],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [0, { [xe]: Xr }],
        [() => Dht, { [Yu]: 1, [lr]: Axe }],
      ],
    ],
    hNi = [
      3,
      De,
      QYa,
      0,
      [Dr, Kp, bxe, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [() => Iht, { [Yu]: 1, [lr]: bxe }],
        [0, { [xe]: Xr }],
      ],
    ],
    gNi = [3, De, WYa, 0, [F5r], [[0, { [xe]: z5r }]]],
    bNi = [
      3,
      De,
      zYa,
      0,
      [Dr, Ou, z2r, Jr, F5r],
      [
        [0, 1],
        [0, { [xe]: a0 }],
        [() => d7i, { [Yu]: 1, [lr]: z2r }],
        [0, { [xe]: Xr }],
        [0, { [xe]: z5r }],
      ],
    ],
    ANi = [
      3,
      De,
      YYa,
      0,
      [Dr, X1t, pd, Ou, Jr],
      [
        [0, 1],
        [() => f7i, { [Yu]: 1, [lr]: X1t }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    yNi = [
      3,
      De,
      JYa,
      0,
      [Dr, Kp, yxe, Jr],
      [
        [0, 1],
        [0, { [_n]: Pv }],
        [() => kht, { [Yu]: 1, [lr]: yxe }],
        [0, { [xe]: Xr }],
      ],
    ],
    _Ni = [
      3,
      De,
      ZYa,
      0,
      [Dr, J2r, Jr, EJa],
      [
        [0, 1],
        [() => n8r, { [Yu]: 1, [lr]: J2r }],
        [0, { [xe]: Xr }],
        [2, { [xe]: YZa }],
      ],
    ],
    ENi = [
      3,
      De,
      tKa,
      0,
      [Dr, pd, Jr, oft, Ou],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: Xr }],
        [() => u8r, { [Yu]: 1, [lr]: oft }],
        [0, { [xe]: a0 }],
      ],
    ],
    vNi = [
      3,
      De,
      nKa,
      0,
      [Dr, pd, Ou, UGa, RDi, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [2, { [xe]: HXa }],
        [0, 16],
        [0, { [xe]: Xr }],
      ],
    ],
    CNi = [
      3,
      De,
      aKa,
      0,
      [Dr, pd, Ou, cft, pIi, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => m8r, { [Yu]: 1, [lr]: cft }],
        [0, { [xe]: BIi }],
        [0, { [xe]: Xr }],
      ],
    ],
    SNi = [
      3,
      De,
      sKa,
      0,
      [Dr, pd, Ou, lft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => JNi, { [Yu]: 1, [lr]: lft }],
        [0, { [xe]: Xr }],
      ],
    ],
    wNi = [
      3,
      De,
      cKa,
      0,
      [Dr, pd, Ou, JS, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => Pht, { [Yu]: 1, [lr]: JS }],
        [0, { [xe]: Xr }],
      ],
    ],
    xNi = [
      3,
      De,
      mKa,
      0,
      [Dr, pd, Ou, w5r, hft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: H5r }],
        [() => BPi, { [Yu]: 1, [lr]: hft }],
        [0, { [xe]: Xr }],
      ],
    ],
    TNi = [
      3,
      De,
      fKa,
      0,
      [Dr, pd, Ou, gft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => LPi, { [Yu]: 1, [lr]: gft }],
        [0, { [xe]: Xr }],
      ],
    ],
    DNi = [3, De, _Ka, 0, [rm], [[0, { [xe]: Lm }]]],
    INi = [
      3,
      De,
      EKa,
      0,
      [Ide, QK, Dr, pd, Ou, Lde, Mde, Fde, h5r, Ude, Za, Ll, bl, Jr],
      [
        [0, { [xe]: Xde }],
        [() => K5r, { [Yu]: 1, [lr]: QK }],
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: q5r }],
        [0, { [xe]: n1e }],
        [0, 1],
        [0, { [xe]: Fl }],
        [0, { [_n]: S9 }],
        [0, { [xe]: Xr }],
      ],
    ],
    RNi = [3, De, xKa, 0, [rm], [[0, { [xe]: Lm }]]],
    kNi = [
      3,
      De,
      TKa,
      0,
      [Dr, Za, ift, Ll, bl, pd, Ou, Jr],
      [
        [0, 1],
        [0, 1],
        [() => o8r, { [Yu]: 1, [lr]: ift }],
        [0, { [xe]: Fl }],
        [0, { [_n]: S9 }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    ONi = [3, De, CKa, 0, [rm], [[0, { [xe]: Lm }]]],
    NNi = [
      3,
      De,
      SKa,
      0,
      [Dr, sft, Ll, pIi, pd, Ou, Jr],
      [
        [0, 1],
        [() => i8r, { [Yu]: 1, [lr]: sft }],
        [0, { [xe]: Fl }],
        [0, { [xe]: BIi }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    PNi = [
      3,
      De,
      DKa,
      0,
      [yI, v3, f5, p5, h5, g5, b5, py, E9, bl, Jp, Xp, A5, jN, d5, Yde, rm],
      [
        [0, { [xe]: Gxe }],
        [0, { [xe]: v3 }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, { [xe]: Zde }],
        [0, { [xe]: gy }],
        [0, { [xe]: vI }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [1, { [xe]: UZa }],
        [0, { [xe]: Lm }],
      ],
    ],
    BNi = [
      3,
      De,
      IKa,
      0,
      [
        Ide,
        xxe,
        Dr,
        Rde,
        kde,
        Ode,
        Nde,
        Oxe,
        pd,
        Pde,
        Ou,
        f5,
        p5,
        h5,
        g5,
        b5,
        KS,
        jde,
        Lxe,
        Lde,
        Mde,
        Fde,
        Ude,
        Za,
        vXa,
        Gde,
        E9,
        kA,
        $xe,
        Jp,
        Ov,
        Xp,
        A5,
        jN,
        d5,
        Ll,
        JS,
        Vde,
        Wde,
        Hde,
        Jr,
      ],
      [
        [0, { [xe]: Xde }],
        [() => Yxe, 16],
        [0, 1],
        [0, { [xe]: Txe }],
        [0, { [xe]: Dxe }],
        [0, { [xe]: Ixe }],
        [0, { [xe]: Rxe }],
        [1, { [xe]: kxe }],
        [0, { [xe]: fd }],
        [0, { [xe]: Nxe }],
        [0, { [xe]: a0 }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [4, { [xe]: KS }],
        [0, { [xe]: qK }],
        [0, { [xe]: Qde }],
        [0, { [xe]: e1e }],
        [0, { [xe]: t1e }],
        [0, { [xe]: r1e }],
        [0, { [xe]: n1e }],
        [0, 1],
        [1, { [xe]: JZa }],
        [128, { [Jde]: i1e }],
        [0, { [xe]: gy }],
        [0, { [xe]: Wxe }],
        [0, { [xe]: zxe }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [() => dj, { [xe]: mj }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Fl }],
        [0, { [xe]: W5r }],
        [0, { [xe]: Hxe }],
        [5, { [xe]: Vxe }],
        [0, { [xe]: qxe }],
        [0, { [xe]: Xr }],
      ],
    ],
    LNi = [3, De, RKa, 0, [rm], [[0, { [xe]: Lm }]]],
    MNi = [
      3,
      De,
      kKa,
      0,
      [Dr, Za, dft, Ll, bl, t5r, pd, Ou, Jr],
      [
        [0, 1],
        [0, 1],
        [() => s8r, { [Yu]: 1, [lr]: dft }],
        [0, { [xe]: Fl }],
        [0, { [_n]: S9 }],
        [2, { [xe]: Q5r }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    FNi = [3, De, PKa, 0, [bl], [[0, { [xe]: vI }]]],
    UNi = [
      3,
      De,
      BKa,
      0,
      [Dr, Za, bl, pd, Ou, JS, Jr, Ll],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => Pht, { [Yu]: 1, [lr]: JS }],
        [0, { [xe]: Xr }],
        [0, { [xe]: Fl }],
      ],
    ],
    $Ni = [
      3,
      De,
      MKa,
      0,
      [Dr, pd, Ou, aft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => c8r, { [Yu]: 1, [lr]: aft }],
        [0, { [xe]: Xr }],
      ],
    ],
    jNi = [3, De, PDi, 0, [Kp, jKa, f5r, $N], [0, [0, { [lr]: HKa }], [64, { [zo]: 1, [lr]: p5r }], [() => Oht, 0]]],
    Nht = [3, De, yht, 0, [yI, Bde], [0, 1]],
    QNi = [3, De, WKa, 0, [DDi], [[21, { [$5r]: 1 }]]],
    GNi = [3, De, VDi, 0, [zTi, mWa, ODi, YKa, KKa], [0, 0, 0, 0, 0]],
    l8r = [3, De, I5r, 0, [zTi, ODi], [0, 0]],
    qNi = [3, De, XKa, 0, [], []],
    HNi = [
      3,
      De,
      tJa,
      0,
      [Dr, Za, cJa, Rqa, Oqa, kqa, Nqa, CJa, wJa, SJa, xJa, WGa],
      [
        [0, 1],
        [0, 1],
        [0, { [xe]: GZa }],
        [0, { [xe]: qK }],
        [0, { [xe]: Qde }],
        [4, { [xe]: y5r }],
        [4, { [xe]: E5r }],
        [0, { [xe]: qZa }],
        [0, { [xe]: VZa }],
        [6, { [xe]: HZa }],
        [6, { [xe]: WZa }],
        [0, { [xe]: zXa, [DXa]: 1 }],
      ],
    ],
    VNi = [3, De, QDi, 0, [RA], [0]],
    m8r = [3, De, cft, 0, [pJa, Fxe], [0, [() => yeu, { [zo]: 1, [lr]: zde }]]],
    WNi = [
      3,
      De,
      sJa,
      0,
      [$de, UKa, O0, $N, RA, tIi, LTi, mht, TTi],
      [0, 1, 0, [() => YNi, 0], 0, () => hPi, () => _Ri, () => dRi, () => iRi],
    ],
    zNi = [3, De, iJa, 0, [O0, Kde], [0, [() => QN, { [zo]: 1, [lr]: Nv }]]],
    YNi = [3, De, oJa, 0, [O0, Nv, wxe], [0, () => ZK, [() => zNi, 0]]],
    KNi = [3, De, HDi, 0, [RA, rXa], [0, () => d8r]],
    d8r = [3, De, lJa, 0, [Jza], [1]],
    JNi = [3, De, lft, 0, [TDi], [0]],
    XNi = [3, De, GDi, 0, [uHa], [2]],
    ZNi = [
      3,
      De,
      ZKa,
      0,
      [rm, eJa],
      [
        [0, { [xe]: Lm }],
        [0, { [xe]: jZa }],
      ],
    ],
    ePi = [
      3,
      De,
      rJa,
      0,
      [Dr, Za, bl, X2r, Ll, Ou, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [_n]: S9 }],
        [() => tPi, { [Yu]: 1, [lr]: X2r }],
        [0, { [xe]: Fl }],
        [0, { [xe]: a0 }],
        [0, { [xe]: Xr }],
      ],
    ],
    tPi = [3, De, X2r, 0, [Bde, WTi, Uxe, dIi, Xqa, XDi, EDi], [1, () => Pki, 0, 0, 0, () => lPi, [() => eNi, 0]]],
    f8r = [3, De, N5r, 0, [wWa, VKa], [2, 4]],
    rPi = [3, De, qDi, 0, [wTi, VDi], [() => _7i, () => GNi]],
    nPi = [3, De, TJa, 0, [dHa], [[() => oeu, { [zo]: 1, [lr]: GTi }]]],
    iPi = [
      3,
      De,
      IJa,
      0,
      [dGa, O0, d5r, fGa, cht, JS, bIi, kA],
      [0, 0, [() => pRi, 0], 0, [() => Lht, 0], [() => Pht, 0], [() => weu, 0], 0],
    ],
    oPi = [3, De, iIi, 0, [L5r, _ht], [0, 0]],
    sPi = [3, De, oIi, 0, [L5r, _ht, B5r, cIi], [0, 0, 0, 0]],
    aPi = [3, De, ZDi, 0, [jJa, UTi], [1, 1]],
    uPi = [3, De, NJa, 0, [DDi], [[() => VPi, 16]]],
    cPi = [
      3,
      De,
      PJa,
      0,
      [Dr, Za, Jp, Ov, Xp, jTi, FTi, GDi, _5r, D5r, ZDi, Jr],
      [
        [0, 1],
        [0, 1],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        0,
        0,
        () => XNi,
        () => t8r,
        () => a8r,
        () => aPi,
        [0, { [xe]: Xr }],
      ],
    ],
    lPi = [3, De, XDi, 0, [_5r, FTi, jTi, D5r], [() => t8r, 0, 0, () => a8r]],
    mPi = [3, De, LJa, 0, [BJa, jWa], [0, [() => Kg, 0]]],
    p8r = [3, De, pft, 0, [Fxe], [[() => _eu, { [zo]: 1, [lr]: zde }]]],
    dPi = [3, De, MJa, 0, [nGa, d5, sTi], [[() => mPi, 0], 2, [() => a7i, 0]]],
    fPi = [
      3,
      De,
      yJa,
      0,
      [Gxi, Kxi, Jxi, yI],
      [
        [0, { [lr]: Gxi }],
        [() => Xxi, { [lr]: Kxi }],
        [() => Xxi, { [lr]: Jxi }],
        [4, { [lr]: yI }],
      ],
    ],
    pPi = [3, De, fft, { [lr]: fft }, [], []],
    hPi = [3, De, tIi, 0, [JDi, QDi], [() => bPi, () => VNi]],
    gPi = [3, De, rIi, { [lr]: KDi }, [MWa], [[() => Kg, 0]]],
    bPi = [3, De, JDi, 0, [RA], [0]],
    APi = [3, De, nIi, { [lr]: eIi }, [], []],
    yPi = [3, De, sIi, 0, [cTi, aTi, uTi], [1, 1, 1]],
    _Pi = [3, De, vJa, 0, [OTi], [[() => yPi, { [$5r]: 1 }]]],
    EPi = [3, De, YDi, 0, [Iqa], [() => vPi]],
    vPi = [3, De, bJa, 0, [wYa, mht], [0, () => o7i]],
    ZK = [3, De, Nv, 0, [Za, U5r], [0, 0]],
    Pht = [3, De, JS, 0, [Eht], [[() => QN, 0]]],
    CPi = [3, De, YJa, 0, [b5r, IDi], [[() => X5r, { [kIi]: [RIi, _Ii] }], 0]],
    SPi = [
      3,
      De,
      lIi,
      0,
      [fft, uft],
      [
        [() => pPi, { [lr]: fft }],
        [() => iNi, { [lr]: uft }],
      ],
    ],
    wPi = [3, De, fIi, 0, [Bde, oTi], [1, 0]],
    xPi = [-3, De, XJa, { [C9]: v9, [hy]: 400 }, [], []];
  IA.TypeRegistry.for(De).registerError(xPi, W1t);
  var TPi = [3, De, aIi, 0, [Kp, GJa, f5r, $N], [0, [0, { [lr]: nXa }], [64, { [zo]: 1, [lr]: p5r }], [() => Oht, 0]]],
    DPi = [3, De, hIi, 0, [kTi, Bde, kA], [5, 1, 0]],
    IPi = [
      3,
      De,
      aXa,
      0,
      [Dr, pd, Ou, tft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => Zki, { [Yu]: 1, [lr]: tft }],
        [0, { [xe]: Xr }],
      ],
    ],
    RPi = [
      3,
      De,
      cXa,
      0,
      [Dr, pd, Ou, rft, Jr],
      [
        [0, 1],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [() => rOi, { [Yu]: 1, [lr]: rft }],
        [0, { [xe]: Xr }],
      ],
    ],
    kPi = [
      3,
      De,
      dXa,
      0,
      [STi, pTi, E9, Jp, Xp, A5, d5, rm],
      [
        [0, { [xe]: HIi }],
        [() => w7i, 16],
        [0, { [xe]: gy }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Lm }],
      ],
    ],
    OPi = [
      3,
      De,
      fXa,
      0,
      [Dr, gTi, bTi, ATi, yTi, _Ti, QGa, Za, VK, lj, Jp, Ov, Xp, ETi, a5r, vTi, Ll, Jr, MTi],
      [
        [0, 1],
        [0, { [xe]: MIi }],
        [0, { [xe]: FIi }],
        [4, { [xe]: UIi }],
        [0, { [xe]: $Ii }],
        [4, { [xe]: jIi }],
        [0, { [xe]: WXa }],
        [0, 1],
        [1, { [_n]: Sht }],
        [0, { [_n]: Qxe }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [0, { [xe]: QIi }],
        [() => XIi, { [xe]: GIi }],
        [0, { [xe]: qIi }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
        [0, { [xe]: KIi }],
      ],
    ],
    NPi = [
      3,
      De,
      pXa,
      0,
      [E9, v3, f5, p5, h5, g5, b5, Jp, Xp, A5, d5, rm],
      [
        [0, { [xe]: gy }],
        [0, { [xe]: v3 }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, { [xe]: C3 }],
        [0, { [xe]: S3 }],
        [() => Kg, { [xe]: by }],
        [2, { [xe]: Ay }],
        [0, { [xe]: Lm }],
      ],
    ],
    PPi = [
      3,
      De,
      hXa,
      0,
      [xxe, Dr, Oxe, pd, Ou, f5, p5, h5, g5, b5, Za, VK, lj, Jp, Ov, Xp, Ll, Jr],
      [
        [() => Yxe, 16],
        [0, 1],
        [1, { [xe]: kxe }],
        [0, { [xe]: fd }],
        [0, { [xe]: a0 }],
        [0, { [xe]: zK }],
        [0, { [xe]: YK }],
        [0, { [xe]: KK }],
        [0, { [xe]: JK }],
        [0, { [xe]: XK }],
        [0, 1],
        [1, { [_n]: Sht }],
        [0, { [_n]: Qxe }],
        [0, { [xe]: C3 }],
        [() => tw, { [xe]: ew }],
        [0, { [xe]: S3 }],
        [0, { [xe]: Fl }],
        [0, { [xe]: Xr }],
      ],
    ],
    BPi = [3, De, hft, 0, [uDi, RA], [[0, { [lr]: sDi }], 0]],
    LPi = [3, De, gft, 0, [l5r, A5r, I5r, k5r], [() => J5r, () => Z5r, () => l8r, [() => GPi, 0]]],
    MPi = [
      3,
      De,
      EXa,
      0,
      [
        uJa,
        mJa,
        xxe,
        _Ja,
        PTi,
        BTi,
        Z2r,
        Rde,
        kde,
        Ode,
        Nde,
        Oxe,
        s5r,
        Pde,
        f5,
        p5,
        h5,
        g5,
        b5,
        GK,
        v3,
        KS,
        yI,
        EI,
        x5r,
        Gde,
        Vde,
        Hde,
        Wde,
        hht,
        O5r,
        rm,
        P5r,
        E9,
        Jp,
        A5,
        Xp,
        kA,
        M5r,
        bl,
        d5,
      ],
      [
        [0, { [TXa]: 1, [xe]: QZa }],
        [0, { [xe]: zZa }],
        [() => Yxe, 16],
        [1, { [xe]: RZa }],
        [0, { [xe]: YXa }],
        [0, { [xe]: KXa }],
        [0, { [xe]: sZa }],
        [0, { [xe]: JXa }],
        [0, { [xe]: XXa }],
        [0, { [xe]: ZXa }],
        [0, { [xe]: eZa }],
        [1, { [xe]: kxe }],
        [0, { [xe]: tZa }],
        [0, { [xe]: rZa }],
        [0, { [xe]: aZa }],
        [0, { [xe]: uZa }],
        [0, { [xe]: cZa }],
        [0, { [xe]: lZa }],
        [0, { [xe]: mZa }],
        [2, { [xe]: dZa }],
        [0, { [xe]: nZa }],
        [4, { [xe]: iZa }],
        [0, { [xe]: fZa }],
        [4, { [xe]: oZa }],
        [1, { [xe]: pZa }],
        [128, { [Jde]: i1e }],
        [0, { [xe]: bZa }],
        [0, { [xe]: gZa }],
        [5, { [xe]: AZa }],
        [1, { [xe]: hZa }],
        [0, { [xe]: EZa }],
        [0, { [xe]: _Za }],
        [0, { [xe]: yZa }],
        [0, { [xe]: CZa }],
        [0, { [xe]: xZa }],
        [() => Kg, { [xe]: SZa }],
        [0, { [xe]: TZa }],
        [0, { [xe]: vZa }],
        [1, { [xe]: DZa }],
        [0, { [xe]: IZa }],
        [2, { [xe]: wZa }],
      ],
    ],
    wa = "unit",
    FPi = [-3, IIi, "S3ServiceException", 0, [], []];
  IA.TypeRegistry.for(IIi).registerError(FPi, E3);
  var ZZa = [1, De, Zxi, 0, [() => xht, 0]],
    UPi = [1, De, n5r, 0, [() => u7i, { [lr]: Dr }]],
    Bht = [1, De, LGa, 0, () => h7i],
    eeu = [1, De, MGa, 0, () => b7i],
    $Pi = [1, De, i5r, 0, [() => T7i, 0]],
    teu = [1, De, qqa, 0, () => rRi],
    reu = [1, De, DTi, 0, () => nRi],
    neu = [1, De, oHa, 0, [0, { [lr]: m5r }]],
    ieu = [1, De, $Ti, 0, () => ARi],
    oeu = [1, De, mHa, 0, () => ERi],
    Lht = [1, De, dht, 0, [() => Bki, { [lr]: g5r }]],
    seu = [1, De, XTi, 0, [() => Dht, 0]],
    aeu = [1, De, YTi, 0, [() => Iht, 0]],
    ueu = [1, De, _Wa, 0, [0, { [lr]: fHa }]],
    ceu = [1, De, fza, 0, [() => oOi, 0]],
    jPi = [1, De, Uza, 0, [() => aOi, 0]],
    leu = [1, De, iDi, 0, [() => kht, 0]],
    meu = [1, De, Yza, 0, () => $Oi],
    deu = [1, De, aYa, 0, () => QOi],
    feu = [1, De, pYa, 0, () => YOi],
    QPi = [1, De, _Ya, 0, [() => WOi, 0]],
    peu = [1, De, TYa, 0, [() => ZOi, 0]],
    heu = [1, De, mYa, 0, () => tNi],
    geu = [1, De, bht, 0, () => nNi],
    beu = [1, De, bKa, 0, () => XOi],
    Aeu = [1, De, QKa, 0, [() => jNi, 0]],
    yeu = [1, De, aJa, 0, [() => WNi, 0]],
    GPi = [1, De, k5r, 0, [() => rPi, { [lr]: qDi }]],
    _eu = [1, De, FJa, 0, [() => dPi, 0]],
    QN = [1, De, Eht, 0, [() => ZK, { [lr]: Nv }]],
    Eeu = [1, De, uIi, 0, [() => CPi, { [lr]: g5r }]],
    veu = [1, De, KJa, 0, () => wPi],
    Ceu = [1, De, VJa, 0, [() => TPi, 0]],
    Seu = [1, De, JJa, 0, () => DPi],
    weu = [1, De, bIi, 0, [() => BOi, { [lr]: aDi }]],
    qPi = [4, De, GQa, 0, [O0, Nv, wxe], [0, () => ZK, [() => i7i, 0]]],
    HPi = [4, De, Vza, 0, [O0, Nv, nTi, wxe], [0, () => ZK, 0, [() => UOi, 0]]],
    VPi = [
      4,
      De,
      OJa,
      { [DIi]: 1 },
      [fJa, sIi, kDi, JGa, UTi],
      [[() => QNi, 0], [() => _Pi, 0], [() => aNi, 0], () => E7i, () => bRi],
    ],
    WPi = [9, De, zQa, { [Ur]: ["DELETE", "/{Key+}?x-id=AbortMultipartUpload", 204] }, () => t7i, () => e7i],
    zPi = [9, De, mTi, { [Ur]: ["POST", "/{Key+}", 200] }, () => y7i, () => A7i],
    YPi = [9, De, OGa, { [Ur]: ["PUT", "/{Key+}?x-id=CopyObject", 200] }, () => C7i, () => v7i],
    KPi = [9, De, pGa, { [Ur]: ["PUT", "/", 200] }, () => O7i, () => k7i],
    JPi = [9, De, hGa, { [Ml]: "-", [Ur]: ["POST", "/?metadataConfiguration", 200] }, () => I7i, () => wa],
    XPi = [9, De, bGa, { [Ml]: "-", [Ur]: ["POST", "/?metadataTable", 200] }, () => R7i, () => wa],
    ZPi = [9, De, kGa, { [Ur]: ["POST", "/{Key+}?uploads", 200] }, () => P7i, () => N7i],
    eBi = [9, De, VGa, { [Ur]: ["GET", "/?session", 200] }, () => L7i, () => B7i],
    tBi = [9, De, ZGa, { [Ur]: ["DELETE", "/", 204] }, () => Z7i, () => wa],
    rBi = [9, De, eqa, { [Ur]: ["DELETE", "/?analytics", 204] }, () => j7i, () => wa],
    nBi = [9, De, rqa, { [Ur]: ["DELETE", "/?cors", 204] }, () => Q7i, () => wa],
    iBi = [9, De, iqa, { [Ur]: ["DELETE", "/?encryption", 204] }, () => G7i, () => wa],
    oBi = [9, De, uqa, { [Ur]: ["DELETE", "/?intelligent-tiering", 204] }, () => q7i, () => wa],
    sBi = [9, De, sqa, { [Ur]: ["DELETE", "/?inventory", 204] }, () => H7i, () => wa],
    aBi = [9, De, lqa, { [Ur]: ["DELETE", "/?lifecycle", 204] }, () => V7i, () => wa],
    uBi = [9, De, dqa, { [Ur]: ["DELETE", "/?metadataConfiguration", 204] }, () => W7i, () => wa],
    cBi = [9, De, gqa, { [Ur]: ["DELETE", "/?metadataTable", 204] }, () => z7i, () => wa],
    lBi = [9, De, hqa, { [Ur]: ["DELETE", "/?metrics", 204] }, () => Y7i, () => wa],
    mBi = [9, De, Aqa, { [Ur]: ["DELETE", "/?ownershipControls", 204] }, () => K7i, () => wa],
    dBi = [9, De, _qa, { [Ur]: ["DELETE", "/?policy", 204] }, () => J7i, () => wa],
    fBi = [9, De, Sqa, { [Ur]: ["DELETE", "/?replication", 204] }, () => X7i, () => wa],
    pBi = [9, De, wqa, { [Ur]: ["DELETE", "/?tagging", 204] }, () => eRi, () => wa],
    hBi = [9, De, Tqa, { [Ur]: ["DELETE", "/?website", 204] }, () => tRi, () => wa],
    gBi = [9, De, Hqa, { [Ur]: ["DELETE", "/{Key+}?x-id=DeleteObject", 204] }, () => sRi, () => oRi],
    bBi = [9, De, Vqa, { [Ml]: "-", [Ur]: ["POST", "/?delete", 200] }, () => uRi, () => aRi],
    ABi = [9, De, jqa, { [Ur]: ["DELETE", "/{Key+}?tagging", 204] }, () => lRi, () => cRi],
    yBi = [9, De, Wqa, { [Ur]: ["DELETE", "/?publicAccessBlock", 204] }, () => mRi, () => wa],
    _Bi = [9, De, hHa, { [Ur]: ["GET", "/?abac", 200] }, () => CRi, () => vRi],
    EBi = [9, De, gHa, { [Ur]: ["GET", "/?accelerate", 200] }, () => wRi, () => SRi],
    vBi = [9, De, xHa, { [Ur]: ["GET", "/?acl", 200] }, () => TRi, () => xRi],
    CBi = [
      9,
      De,
      EHa,
      { [Ur]: ["GET", "/?analytics&x-id=GetBucketAnalyticsConfiguration", 200] },
      () => IRi,
      () => DRi,
    ],
    SBi = [9, De, THa, { [Ur]: ["GET", "/?cors", 200] }, () => kRi, () => RRi],
    wBi = [9, De, RHa, { [Ur]: ["GET", "/?encryption", 200] }, () => NRi, () => ORi],
    xBi = [
      9,
      De,
      LHa,
      { [Ur]: ["GET", "/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration", 200] },
      () => BRi,
      () => PRi,
    ],
    TBi = [
      9,
      De,
      NHa,
      { [Ur]: ["GET", "/?inventory&x-id=GetBucketInventoryConfiguration", 200] },
      () => MRi,
      () => LRi,
    ],
    DBi = [9, De, $Ha, { [Ur]: ["GET", "/?lifecycle", 200] }, () => URi, () => FRi],
    IBi = [9, De, UHa, { [Ur]: ["GET", "/?location", 200] }, () => jRi, () => $Ri],
    RBi = [9, De, WHa, { [Ur]: ["GET", "/?logging", 200] }, () => GRi, () => QRi],
    kBi = [9, De, zHa, { [Ur]: ["GET", "/?metadataConfiguration", 200] }, () => HRi, () => qRi],
    OBi = [9, De, eVa, { [Ur]: ["GET", "/?metadataTable", 200] }, () => zRi, () => WRi],
    NBi = [9, De, ZHa, { [Ur]: ["GET", "/?metrics&x-id=GetBucketMetricsConfiguration", 200] }, () => JRi, () => KRi],
    PBi = [9, De, nVa, { [Ur]: ["GET", "/?notification", 200] }, () => XRi, () => n8r],
    BBi = [9, De, oVa, { [Ur]: ["GET", "/?ownershipControls", 200] }, () => eki, () => ZRi],
    LBi = [9, De, uVa, { [Ur]: ["GET", "/?policy", 200] }, () => rki, () => tki],
    MBi = [9, De, mVa, { [Ur]: ["GET", "/?policyStatus", 200] }, () => iki, () => nki],
    FBi = [9, De, pVa, { [Ur]: ["GET", "/?replication", 200] }, () => ski, () => oki],
    UBi = [9, De, gVa, { [Ur]: ["GET", "/?requestPayment", 200] }, () => uki, () => aki],
    $Bi = [9, De, _Va, { [Ur]: ["GET", "/?tagging", 200] }, () => lki, () => cki],
    jBi = [9, De, CVa, { [Ur]: ["GET", "/?versioning", 200] }, () => dki, () => mki],
    QBi = [9, De, xVa, { [Ur]: ["GET", "/?website", 200] }, () => pki, () => fki],
    GBi = [9, De, IVa, { [Ml]: "-", [Ur]: ["GET", "/{Key+}?x-id=GetObject", 200] }, () => wki, () => Ski],
    qBi = [9, De, RVa, { [Ur]: ["GET", "/{Key+}?acl", 200] }, () => gki, () => hki],
    HBi = [9, De, MVa, { [Ur]: ["GET", "/{Key+}?attributes", 200] }, () => yki, () => bki],
    VBi = [9, De, jVa, { [Ur]: ["GET", "/{Key+}?legal-hold", 200] }, () => Eki, () => _ki],
    WBi = [9, De, FVa, { [Ur]: ["GET", "/?object-lock", 200] }, () => Cki, () => vki],
    zBi = [9, De, zVa, { [Ur]: ["GET", "/{Key+}?retention", 200] }, () => Tki, () => xki],
    YBi = [9, De, YVa, { [Ur]: ["GET", "/{Key+}?tagging", 200] }, () => Iki, () => Dki],
    KBi = [9, De, eWa, { [Ur]: ["GET", "/{Key+}?torrent", 200] }, () => kki, () => Rki],
    JBi = [9, De, tWa, { [Ur]: ["GET", "/?publicAccessBlock", 200] }, () => Nki, () => Oki],
    XBi = [9, De, iWa, { [Ur]: ["HEAD", "/", 200] }, () => Mki, () => Lki],
    ZBi = [9, De, uWa, { [Ur]: ["HEAD", "/{Key+}", 200] }, () => Uki, () => Fki],
    eLi = [
      9,
      De,
      VWa,
      { [Ur]: ["GET", "/?analytics&x-id=ListBucketAnalyticsConfigurations", 200] },
      () => mOi,
      () => lOi,
    ],
    tLi = [
      9,
      De,
      ZWa,
      { [Ur]: ["GET", "/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations", 200] },
      () => fOi,
      () => dOi,
    ],
    rLi = [
      9,
      De,
      KWa,
      { [Ur]: ["GET", "/?inventory&x-id=ListBucketInventoryConfigurations", 200] },
      () => hOi,
      () => pOi,
    ],
    nLi = [9, De, rza, { [Ur]: ["GET", "/?metrics&x-id=ListBucketMetricsConfigurations", 200] }, () => bOi, () => gOi],
    iLi = [9, De, HWa, { [Ur]: ["GET", "/?x-id=ListBuckets", 200] }, () => yOi, () => AOi],
    oLi = [9, De, aza, { [Ur]: ["GET", "/?x-id=ListDirectoryBuckets", 200] }, () => EOi, () => _Oi],
    sLi = [9, De, yza, { [Ur]: ["GET", "/?uploads", 200] }, () => COi, () => vOi],
    aLi = [9, De, Cza, { [Ur]: ["GET", "/", 200] }, () => wOi, () => SOi],
    uLi = [9, De, xza, { [Ur]: ["GET", "/?list-type=2", 200] }, () => TOi, () => xOi],
    cLi = [9, De, kza, { [Ur]: ["GET", "/?versions", 200] }, () => IOi, () => DOi],
    lLi = [9, De, Oza, { [Ur]: ["GET", "/{Key+}?x-id=ListParts", 200] }, () => kOi, () => ROi],
    mLi = [9, De, IYa, { [Ml]: "-", [Ur]: ["PUT", "/?abac", 200] }, () => uNi, () => wa],
    dLi = [9, De, RYa, { [Ml]: "-", [Ur]: ["PUT", "/?accelerate", 200] }, () => cNi, () => wa],
    fLi = [9, De, LYa, { [Ml]: "-", [Ur]: ["PUT", "/?acl", 200] }, () => lNi, () => wa],
    pLi = [9, De, NYa, { [Ur]: ["PUT", "/?analytics", 200] }, () => mNi, () => wa],
    hLi = [9, De, MYa, { [Ml]: "-", [Ur]: ["PUT", "/?cors", 200] }, () => dNi, () => wa],
    gLi = [9, De, UYa, { [Ml]: "-", [Ur]: ["PUT", "/?encryption", 200] }, () => fNi, () => wa],
    bLi = [9, De, GYa, { [Ur]: ["PUT", "/?intelligent-tiering", 200] }, () => pNi, () => wa],
    ALi = [9, De, jYa, { [Ur]: ["PUT", "/?inventory", 200] }, () => hNi, () => wa],
    yLi = [9, De, VYa, { [Ml]: "-", [Ur]: ["PUT", "/?lifecycle", 200] }, () => bNi, () => gNi],
    _Li = [9, De, HYa, { [Ml]: "-", [Ur]: ["PUT", "/?logging", 200] }, () => ANi, () => wa],
    ELi = [9, De, KYa, { [Ur]: ["PUT", "/?metrics", 200] }, () => yNi, () => wa],
    vLi = [9, De, XYa, { [Ur]: ["PUT", "/?notification", 200] }, () => _Ni, () => wa],
    CLi = [9, De, eKa, { [Ml]: "-", [Ur]: ["PUT", "/?ownershipControls", 200] }, () => ENi, () => wa],
    SLi = [9, De, rKa, { [Ml]: "-", [Ur]: ["PUT", "/?policy", 200] }, () => vNi, () => wa],
    wLi = [9, De, iKa, { [Ml]: "-", [Ur]: ["PUT", "/?replication", 200] }, () => CNi, () => wa],
    xLi = [9, De, oKa, { [Ml]: "-", [Ur]: ["PUT", "/?requestPayment", 200] }, () => SNi, () => wa],
    TLi = [9, De, uKa, { [Ml]: "-", [Ur]: ["PUT", "/?tagging", 200] }, () => wNi, () => wa],
    DLi = [9, De, lKa, { [Ml]: "-", [Ur]: ["PUT", "/?versioning", 200] }, () => xNi, () => wa],
    ILi = [9, De, dKa, { [Ml]: "-", [Ur]: ["PUT", "/?website", 200] }, () => TNi, () => wa],
    RLi = [9, De, AKa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?x-id=PutObject", 200] }, () => BNi, () => PNi],
    kLi = [9, De, yKa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?acl", 200] }, () => INi, () => DNi],
    OLi = [9, De, wKa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?legal-hold", 200] }, () => kNi, () => RNi],
    NLi = [9, De, vKa, { [Ml]: "-", [Ur]: ["PUT", "/?object-lock", 200] }, () => NNi, () => ONi],
    PLi = [9, De, OKa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?retention", 200] }, () => MNi, () => LNi],
    BLi = [9, De, NKa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?tagging", 200] }, () => UNi, () => FNi],
    LLi = [9, De, LKa, { [Ml]: "-", [Ur]: ["PUT", "/?publicAccessBlock", 200] }, () => $Ni, () => wa],
    MLi = [9, De, JKa, { [Ur]: ["PUT", "/{Key+}?renameObject", 200] }, () => HNi, () => qNi],
    FLi = [9, De, nJa, { [Ml]: "-", [Ur]: ["POST", "/{Key+}?restore", 200] }, () => ePi, () => ZNi],
    ULi = [9, De, kJa, { [Ur]: ["POST", "/{Key+}?select&select-type=2", 200] }, () => cPi, () => uPi],
    $Li = [9, De, sXa, { [Ml]: "-", [Ur]: ["PUT", "/?metadataInventoryTable", 200] }, () => IPi, () => wa],
    jLi = [9, De, uXa, { [Ml]: "-", [Ur]: ["PUT", "/?metadataJournalTable", 200] }, () => RPi, () => wa],
    QLi = [9, De, lXa, { [Ml]: "-", [Ur]: ["PUT", "/{Key+}?x-id=UploadPart", 200] }, () => PPi, () => NPi],
    GLi = [9, De, mXa, { [Ur]: ["PUT", "/{Key+}?x-id=UploadPartCopy", 200] }, () => OPi, () => kPi],
    qLi = [
      9,
      De,
      _Xa,
      { [wXa]: ["{RequestRoute}."], [Ur]: ["POST", "/WriteGetObjectResponse", 200] },
      () => MPi,
      () => wa,
    ],
    _xe = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "CreateSession", {})
      .n("S3Client", "CreateSessionCommand")
      .sc(eBi)
      .build() {},
    xeu = (t) => {
      let e = t.httpAuthSchemes,
        r = t.httpAuthSchemeProvider,
        n = t.credentials;
      return {
        setHttpAuthScheme(o) {
          let s = e.findIndex((a) => a.schemeId === o.schemeId);
          s === -1 ? e.push(o) : e.splice(s, 1, o);
        },
        httpAuthSchemes() {
          return e;
        },
        setHttpAuthSchemeProvider(o) {
          r = o;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(o) {
          n = o;
        },
        credentials() {
          return n;
        },
      };
    },
    Teu = (t) => ({
      httpAuthSchemes: t.httpAuthSchemes(),
      httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
      credentials: t.credentials(),
    }),
    Deu = (t, e) => {
      let r = Object.assign(
        jxi.getAwsRegionExtensionConfiguration(t),
        Rr.getDefaultExtensionConfiguration(t),
        Qxi.getHttpHandlerExtensionConfiguration(t),
        xeu(t),
      );
      return (
        e.forEach((n) => n.configure(r)),
        Object.assign(
          t,
          jxi.resolveAwsRegionExtensionConfiguration(r),
          Rr.resolveDefaultRuntimeConfig(r),
          Qxi.resolveHttpHandlerRuntimeConfig(r),
          Teu(r),
        )
      );
    },
    aj = class extends Rr.Client {
      config;
      constructor(...[e]) {
        let r = MQa.getRuntimeConfig(e || {});
        (super(r), (this.initConfig = r));
        let n = UQa(r),
          o = Fxi.resolveUserAgentConfig(n),
          s = gl.resolveFlexibleChecksumsConfig(o),
          a = Uxi.resolveRetryConfig(s),
          u = PQa.resolveRegionConfig(a),
          c = Mxi.resolveHostHeaderConfig(u),
          m = Mr.resolveEndpointConfig(c),
          d = BQa.resolveEventStreamSerdeConfig(m),
          f = $xi.resolveHttpAuthSchemeConfig(d),
          p = Xn.resolveS3Config(f, { session: [() => this, _xe] }),
          h = Deu(p, e?.extensions || []);
        ((this.config = h),
          this.middlewareStack.use(IA.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(Fxi.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(Uxi.getRetryPlugin(this.config)),
          this.middlewareStack.use(LQa.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(Mxi.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(OQa.getLoggerPlugin(this.config)),
          this.middlewareStack.use(NQa.getRecursionDetectionPlugin(this.config)),
          this.middlewareStack.use(
            jK.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: $xi.defaultS3HttpAuthSchemeParametersProvider,
              identityProviderConfigProvider: async (g) =>
                new jK.DefaultIdentityProviderConfig({
                  "aws.auth#sigv4": g.credentials,
                  "aws.auth#sigv4a": g.credentials,
                }),
            }),
          ),
          this.middlewareStack.use(jK.getHttpSigningPlugin(this.config)),
          this.middlewareStack.use(Xn.getValidateBucketNamePlugin(this.config)),
          this.middlewareStack.use(kQa.getAddExpectContinuePlugin(this.config)),
          this.middlewareStack.use(Xn.getRegionRedirectMiddlewarePlugin(this.config)),
          this.middlewareStack.use(Xn.getS3ExpressPlugin(this.config)),
          this.middlewareStack.use(Xn.getS3ExpressHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    },
    bft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "AbortMultipartUpload", {})
      .n("S3Client", "AbortMultipartUploadCommand")
      .sc(WPi)
      .build() {},
    Aft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "CompleteMultipartUpload", {})
      .n("S3Client", "CompleteMultipartUploadCommand")
      .sc(zPi)
      .build() {},
    yft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
        Key: { type: "contextParams", name: "Key" },
        CopySource: { type: "contextParams", name: "CopySource" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "CopyObject", {})
      .n("S3Client", "CopyObjectCommand")
      .sc(YPi)
      .build() {},
    _ft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        DisableAccessPoints: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          FQa.getLocationConstraintPlugin(n),
        ];
      })
      .s("AmazonS3", "CreateBucket", {})
      .n("S3Client", "CreateBucketCommand")
      .sc(KPi)
      .build() {},
    Eft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "CreateBucketMetadataConfiguration", {})
      .n("S3Client", "CreateBucketMetadataConfigurationCommand")
      .sc(JPi)
      .build() {},
    vft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "CreateBucketMetadataTableConfiguration", {})
      .n("S3Client", "CreateBucketMetadataTableConfigurationCommand")
      .sc(XPi)
      .build() {},
    Cft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "CreateMultipartUpload", {})
      .n("S3Client", "CreateMultipartUploadCommand")
      .sc(ZPi)
      .build() {},
    Sft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketAnalyticsConfiguration", {})
      .n("S3Client", "DeleteBucketAnalyticsConfigurationCommand")
      .sc(rBi)
      .build() {},
    wft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucket", {})
      .n("S3Client", "DeleteBucketCommand")
      .sc(tBi)
      .build() {},
    xft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketCors", {})
      .n("S3Client", "DeleteBucketCorsCommand")
      .sc(nBi)
      .build() {},
    Tft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketEncryption", {})
      .n("S3Client", "DeleteBucketEncryptionCommand")
      .sc(iBi)
      .build() {},
    Dft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketIntelligentTieringConfiguration", {})
      .n("S3Client", "DeleteBucketIntelligentTieringConfigurationCommand")
      .sc(oBi)
      .build() {},
    Ift = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketInventoryConfiguration", {})
      .n("S3Client", "DeleteBucketInventoryConfigurationCommand")
      .sc(sBi)
      .build() {},
    Rft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketLifecycle", {})
      .n("S3Client", "DeleteBucketLifecycleCommand")
      .sc(aBi)
      .build() {},
    kft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketMetadataConfiguration", {})
      .n("S3Client", "DeleteBucketMetadataConfigurationCommand")
      .sc(uBi)
      .build() {},
    Oft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketMetadataTableConfiguration", {})
      .n("S3Client", "DeleteBucketMetadataTableConfigurationCommand")
      .sc(cBi)
      .build() {},
    Nft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketMetricsConfiguration", {})
      .n("S3Client", "DeleteBucketMetricsConfigurationCommand")
      .sc(lBi)
      .build() {},
    Pft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketOwnershipControls", {})
      .n("S3Client", "DeleteBucketOwnershipControlsCommand")
      .sc(mBi)
      .build() {},
    Bft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketPolicy", {})
      .n("S3Client", "DeleteBucketPolicyCommand")
      .sc(dBi)
      .build() {},
    Lft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketReplication", {})
      .n("S3Client", "DeleteBucketReplicationCommand")
      .sc(fBi)
      .build() {},
    Mft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketTagging", {})
      .n("S3Client", "DeleteBucketTaggingCommand")
      .sc(pBi)
      .build() {},
    Fft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeleteBucketWebsite", {})
      .n("S3Client", "DeleteBucketWebsiteCommand")
      .sc(hBi)
      .build() {},
    Uft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "DeleteObject", {})
      .n("S3Client", "DeleteObjectCommand")
      .sc(gBi)
      .build() {},
    $ft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "DeleteObjects", {})
      .n("S3Client", "DeleteObjectsCommand")
      .sc(bBi)
      .build() {},
    jft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "DeleteObjectTagging", {})
      .n("S3Client", "DeleteObjectTaggingCommand")
      .sc(ABi)
      .build() {},
    Qft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "DeletePublicAccessBlock", {})
      .n("S3Client", "DeletePublicAccessBlockCommand")
      .sc(yBi)
      .build() {},
    Gft = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketAbac", {})
      .n("S3Client", "GetBucketAbacCommand")
      .sc(_Bi)
      .build() {},
    qft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketAccelerateConfiguration", {})
      .n("S3Client", "GetBucketAccelerateConfigurationCommand")
      .sc(EBi)
      .build() {},
    Hft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketAcl", {})
      .n("S3Client", "GetBucketAclCommand")
      .sc(vBi)
      .build() {},
    Vft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketAnalyticsConfiguration", {})
      .n("S3Client", "GetBucketAnalyticsConfigurationCommand")
      .sc(CBi)
      .build() {},
    Wft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketCors", {})
      .n("S3Client", "GetBucketCorsCommand")
      .sc(SBi)
      .build() {},
    zft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketEncryption", {})
      .n("S3Client", "GetBucketEncryptionCommand")
      .sc(wBi)
      .build() {},
    Yft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketIntelligentTieringConfiguration", {})
      .n("S3Client", "GetBucketIntelligentTieringConfigurationCommand")
      .sc(xBi)
      .build() {},
    Kft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketInventoryConfiguration", {})
      .n("S3Client", "GetBucketInventoryConfigurationCommand")
      .sc(TBi)
      .build() {},
    Jft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketLifecycleConfiguration", {})
      .n("S3Client", "GetBucketLifecycleConfigurationCommand")
      .sc(DBi)
      .build() {},
    Xft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketLocation", {})
      .n("S3Client", "GetBucketLocationCommand")
      .sc(IBi)
      .build() {},
    Zft = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketLogging", {})
      .n("S3Client", "GetBucketLoggingCommand")
      .sc(RBi)
      .build() {},
    ept = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketMetadataConfiguration", {})
      .n("S3Client", "GetBucketMetadataConfigurationCommand")
      .sc(kBi)
      .build() {},
    tpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketMetadataTableConfiguration", {})
      .n("S3Client", "GetBucketMetadataTableConfigurationCommand")
      .sc(OBi)
      .build() {},
    rpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketMetricsConfiguration", {})
      .n("S3Client", "GetBucketMetricsConfigurationCommand")
      .sc(NBi)
      .build() {},
    npt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketNotificationConfiguration", {})
      .n("S3Client", "GetBucketNotificationConfigurationCommand")
      .sc(PBi)
      .build() {},
    ipt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketOwnershipControls", {})
      .n("S3Client", "GetBucketOwnershipControlsCommand")
      .sc(BBi)
      .build() {},
    opt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketPolicy", {})
      .n("S3Client", "GetBucketPolicyCommand")
      .sc(LBi)
      .build() {},
    spt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketPolicyStatus", {})
      .n("S3Client", "GetBucketPolicyStatusCommand")
      .sc(MBi)
      .build() {},
    apt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketReplication", {})
      .n("S3Client", "GetBucketReplicationCommand")
      .sc(FBi)
      .build() {},
    upt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketRequestPayment", {})
      .n("S3Client", "GetBucketRequestPaymentCommand")
      .sc(UBi)
      .build() {},
    cpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketTagging", {})
      .n("S3Client", "GetBucketTaggingCommand")
      .sc($Bi)
      .build() {},
    lpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketVersioning", {})
      .n("S3Client", "GetBucketVersioningCommand")
      .sc(jBi)
      .build() {},
    mpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetBucketWebsite", {})
      .n("S3Client", "GetBucketWebsiteCommand")
      .sc(QBi)
      .build() {},
    dpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetObjectAcl", {})
      .n("S3Client", "GetObjectAclCommand")
      .sc(qBi)
      .build() {},
    fpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "GetObjectAttributes", {})
      .n("S3Client", "GetObjectAttributesCommand")
      .sc(HBi)
      .build() {},
    ppt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestChecksumRequired: !1,
            requestValidationModeMember: "ChecksumMode",
            responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"],
          }),
          XS.getSsecPlugin(n),
          Xn.getS3ExpiresMiddlewarePlugin(n),
        ];
      })
      .s("AmazonS3", "GetObject", {})
      .n("S3Client", "GetObjectCommand")
      .sc(GBi)
      .build() {},
    hpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetObjectLegalHold", {})
      .n("S3Client", "GetObjectLegalHoldCommand")
      .sc(VBi)
      .build() {},
    gpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetObjectLockConfiguration", {})
      .n("S3Client", "GetObjectLockConfigurationCommand")
      .sc(WBi)
      .build() {},
    bpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetObjectRetention", {})
      .n("S3Client", "GetObjectRetentionCommand")
      .sc(zBi)
      .build() {},
    Apt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetObjectTagging", {})
      .n("S3Client", "GetObjectTaggingCommand")
      .sc(YBi)
      .build() {},
    ypt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "GetObjectTorrent", {})
      .n("S3Client", "GetObjectTorrentCommand")
      .sc(KBi)
      .build() {},
    _pt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "GetPublicAccessBlock", {})
      .n("S3Client", "GetPublicAccessBlockCommand")
      .sc(JBi)
      .build() {},
    Tde = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "HeadBucket", {})
      .n("S3Client", "HeadBucketCommand")
      .sc(XBi)
      .build() {},
    Dde = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
          Xn.getS3ExpiresMiddlewarePlugin(n),
        ];
      })
      .s("AmazonS3", "HeadObject", {})
      .n("S3Client", "HeadObjectCommand")
      .sc(ZBi)
      .build() {},
    Ept = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListBucketAnalyticsConfigurations", {})
      .n("S3Client", "ListBucketAnalyticsConfigurationsCommand")
      .sc(eLi)
      .build() {},
    vpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListBucketIntelligentTieringConfigurations", {})
      .n("S3Client", "ListBucketIntelligentTieringConfigurationsCommand")
      .sc(tLi)
      .build() {},
    Cpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListBucketInventoryConfigurations", {})
      .n("S3Client", "ListBucketInventoryConfigurationsCommand")
      .sc(rLi)
      .build() {},
    Spt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListBucketMetricsConfigurations", {})
      .n("S3Client", "ListBucketMetricsConfigurationsCommand")
      .sc(nLi)
      .build() {},
    Exe = class extends Rr.Command.classBuilder()
      .ep(Fr)
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListBuckets", {})
      .n("S3Client", "ListBucketsCommand")
      .sc(iLi)
      .build() {},
    vxe = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListDirectoryBuckets", {})
      .n("S3Client", "ListDirectoryBucketsCommand")
      .sc(oLi)
      .build() {},
    wpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        Bucket: { type: "contextParams", name: "Bucket" },
        Prefix: { type: "contextParams", name: "Prefix" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListMultipartUploads", {})
      .n("S3Client", "ListMultipartUploadsCommand")
      .sc(sLi)
      .build() {},
    xpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        Bucket: { type: "contextParams", name: "Bucket" },
        Prefix: { type: "contextParams", name: "Prefix" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListObjects", {})
      .n("S3Client", "ListObjectsCommand")
      .sc(aLi)
      .build() {},
    Cxe = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        Bucket: { type: "contextParams", name: "Bucket" },
        Prefix: { type: "contextParams", name: "Prefix" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListObjectsV2", {})
      .n("S3Client", "ListObjectsV2Command")
      .sc(uLi)
      .build() {},
    Tpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        Bucket: { type: "contextParams", name: "Bucket" },
        Prefix: { type: "contextParams", name: "Prefix" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "ListObjectVersions", {})
      .n("S3Client", "ListObjectVersionsCommand")
      .sc(cLi)
      .build() {},
    Sxe = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "ListParts", {})
      .n("S3Client", "ListPartsCommand")
      .sc(lLi)
      .build() {},
    Dpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !1,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketAbac", {})
      .n("S3Client", "PutBucketAbacCommand")
      .sc(mLi)
      .build() {},
    Ipt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !1,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketAccelerateConfiguration", {})
      .n("S3Client", "PutBucketAccelerateConfigurationCommand")
      .sc(dLi)
      .build() {},
    Rpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketAcl", {})
      .n("S3Client", "PutBucketAclCommand")
      .sc(fLi)
      .build() {},
    kpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "PutBucketAnalyticsConfiguration", {})
      .n("S3Client", "PutBucketAnalyticsConfigurationCommand")
      .sc(pLi)
      .build() {},
    Opt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketCors", {})
      .n("S3Client", "PutBucketCorsCommand")
      .sc(hLi)
      .build() {},
    Npt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketEncryption", {})
      .n("S3Client", "PutBucketEncryptionCommand")
      .sc(gLi)
      .build() {},
    Ppt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "PutBucketIntelligentTieringConfiguration", {})
      .n("S3Client", "PutBucketIntelligentTieringConfigurationCommand")
      .sc(bLi)
      .build() {},
    Bpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "PutBucketInventoryConfiguration", {})
      .n("S3Client", "PutBucketInventoryConfigurationCommand")
      .sc(ALi)
      .build() {},
    Lpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutBucketLifecycleConfiguration", {})
      .n("S3Client", "PutBucketLifecycleConfigurationCommand")
      .sc(yLi)
      .build() {},
    Mpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketLogging", {})
      .n("S3Client", "PutBucketLoggingCommand")
      .sc(_Li)
      .build() {},
    Fpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "PutBucketMetricsConfiguration", {})
      .n("S3Client", "PutBucketMetricsConfigurationCommand")
      .sc(ELi)
      .build() {},
    Upt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "PutBucketNotificationConfiguration", {})
      .n("S3Client", "PutBucketNotificationConfigurationCommand")
      .sc(vLi)
      .build() {},
    $pt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketOwnershipControls", {})
      .n("S3Client", "PutBucketOwnershipControlsCommand")
      .sc(CLi)
      .build() {},
    jpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketPolicy", {})
      .n("S3Client", "PutBucketPolicyCommand")
      .sc(SLi)
      .build() {},
    Qpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketReplication", {})
      .n("S3Client", "PutBucketReplicationCommand")
      .sc(wLi)
      .build() {},
    Gpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketRequestPayment", {})
      .n("S3Client", "PutBucketRequestPaymentCommand")
      .sc(xLi)
      .build() {},
    qpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketTagging", {})
      .n("S3Client", "PutBucketTaggingCommand")
      .sc(TLi)
      .build() {},
    Hpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketVersioning", {})
      .n("S3Client", "PutBucketVersioningCommand")
      .sc(DLi)
      .build() {},
    Vpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutBucketWebsite", {})
      .n("S3Client", "PutBucketWebsiteCommand")
      .sc(ILi)
      .build() {},
    Wpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObjectAcl", {})
      .n("S3Client", "PutObjectAclCommand")
      .sc(kLi)
      .build() {},
    zpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !1,
          }),
          Xn.getCheckContentLengthHeaderPlugin(n),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObject", {})
      .n("S3Client", "PutObjectCommand")
      .sc(RLi)
      .build() {},
    Ypt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObjectLegalHold", {})
      .n("S3Client", "PutObjectLegalHoldCommand")
      .sc(OLi)
      .build() {},
    Kpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObjectLockConfiguration", {})
      .n("S3Client", "PutObjectLockConfigurationCommand")
      .sc(NLi)
      .build() {},
    Jpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObjectRetention", {})
      .n("S3Client", "PutObjectRetentionCommand")
      .sc(PLi)
      .build() {},
    Xpt = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "PutObjectTagging", {})
      .n("S3Client", "PutObjectTaggingCommand")
      .sc(BLi)
      .build() {},
    Zpt = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "PutPublicAccessBlock", {})
      .n("S3Client", "PutPublicAccessBlockCommand")
      .sc(LLi)
      .build() {},
    eht = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()), Xn.getThrow200ExceptionsPlugin(n)];
      })
      .s("AmazonS3", "RenameObject", {})
      .n("S3Client", "RenameObjectCommand")
      .sc(MLi)
      .build() {},
    tht = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !1,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
        ];
      })
      .s("AmazonS3", "RestoreObject", {})
      .n("S3Client", "RestoreObjectCommand")
      .sc(FLi)
      .build() {},
    rht = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "SelectObjectContent", { eventStream: { output: !0 } })
      .n("S3Client", "SelectObjectContentCommand")
      .sc(ULi)
      .build() {},
    nht = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "UpdateBucketMetadataInventoryTableConfiguration", {})
      .n("S3Client", "UpdateBucketMetadataInventoryTableConfigurationCommand")
      .sc($Li)
      .build() {},
    iht = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        UseS3ExpressControlEndpoint: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !0,
          }),
        ];
      })
      .s("AmazonS3", "UpdateBucketMetadataJournalTableConfiguration", {})
      .n("S3Client", "UpdateBucketMetadataJournalTableConfigurationCommand")
      .sc(jLi)
      .build() {},
    oht = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, Bucket: { type: "contextParams", name: "Bucket" }, Key: { type: "contextParams", name: "Key" } })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          gl.getFlexibleChecksumsPlugin(n, {
            requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
            requestChecksumRequired: !1,
          }),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "UploadPart", {})
      .n("S3Client", "UploadPartCommand")
      .sc(QLi)
      .build() {},
    sht = class extends Rr.Command.classBuilder()
      .ep({
        ...Fr,
        DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 },
        Bucket: { type: "contextParams", name: "Bucket" },
      })
      .m(function (e, r, n, o) {
        return [
          Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions()),
          Xn.getThrow200ExceptionsPlugin(n),
          XS.getSsecPlugin(n),
        ];
      })
      .s("AmazonS3", "UploadPartCopy", {})
      .n("S3Client", "UploadPartCopyCommand")
      .sc(GLi)
      .build() {},
    aht = class extends Rr.Command.classBuilder()
      .ep({ ...Fr, UseObjectLambdaEndpoint: { type: "staticContextParams", value: !0 } })
      .m(function (e, r, n, o) {
        return [Mr.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("AmazonS3", "WriteGetObjectResponse", {})
      .n("S3Client", "WriteGetObjectResponseCommand")
      .sc(qLi)
      .build() {},
    Ieu = {
      AbortMultipartUploadCommand: bft,
      CompleteMultipartUploadCommand: Aft,
      CopyObjectCommand: yft,
      CreateBucketCommand: _ft,
      CreateBucketMetadataConfigurationCommand: Eft,
      CreateBucketMetadataTableConfigurationCommand: vft,
      CreateMultipartUploadCommand: Cft,
      CreateSessionCommand: _xe,
      DeleteBucketCommand: wft,
      DeleteBucketAnalyticsConfigurationCommand: Sft,
      DeleteBucketCorsCommand: xft,
      DeleteBucketEncryptionCommand: Tft,
      DeleteBucketIntelligentTieringConfigurationCommand: Dft,
      DeleteBucketInventoryConfigurationCommand: Ift,
      DeleteBucketLifecycleCommand: Rft,
      DeleteBucketMetadataConfigurationCommand: kft,
      DeleteBucketMetadataTableConfigurationCommand: Oft,
      DeleteBucketMetricsConfigurationCommand: Nft,
      DeleteBucketOwnershipControlsCommand: Pft,
      DeleteBucketPolicyCommand: Bft,
      DeleteBucketReplicationCommand: Lft,
      DeleteBucketTaggingCommand: Mft,
      DeleteBucketWebsiteCommand: Fft,
      DeleteObjectCommand: Uft,
      DeleteObjectsCommand: $ft,
      DeleteObjectTaggingCommand: jft,
      DeletePublicAccessBlockCommand: Qft,
      GetBucketAbacCommand: Gft,
      GetBucketAccelerateConfigurationCommand: qft,
      GetBucketAclCommand: Hft,
      GetBucketAnalyticsConfigurationCommand: Vft,
      GetBucketCorsCommand: Wft,
      GetBucketEncryptionCommand: zft,
      GetBucketIntelligentTieringConfigurationCommand: Yft,
      GetBucketInventoryConfigurationCommand: Kft,
      GetBucketLifecycleConfigurationCommand: Jft,
      GetBucketLocationCommand: Xft,
      GetBucketLoggingCommand: Zft,
      GetBucketMetadataConfigurationCommand: ept,
      GetBucketMetadataTableConfigurationCommand: tpt,
      GetBucketMetricsConfigurationCommand: rpt,
      GetBucketNotificationConfigurationCommand: npt,
      GetBucketOwnershipControlsCommand: ipt,
      GetBucketPolicyCommand: opt,
      GetBucketPolicyStatusCommand: spt,
      GetBucketReplicationCommand: apt,
      GetBucketRequestPaymentCommand: upt,
      GetBucketTaggingCommand: cpt,
      GetBucketVersioningCommand: lpt,
      GetBucketWebsiteCommand: mpt,
      GetObjectCommand: ppt,
      GetObjectAclCommand: dpt,
      GetObjectAttributesCommand: fpt,
      GetObjectLegalHoldCommand: hpt,
      GetObjectLockConfigurationCommand: gpt,
      GetObjectRetentionCommand: bpt,
      GetObjectTaggingCommand: Apt,
      GetObjectTorrentCommand: ypt,
      GetPublicAccessBlockCommand: _pt,
      HeadBucketCommand: Tde,
      HeadObjectCommand: Dde,
      ListBucketAnalyticsConfigurationsCommand: Ept,
      ListBucketIntelligentTieringConfigurationsCommand: vpt,
      ListBucketInventoryConfigurationsCommand: Cpt,
      ListBucketMetricsConfigurationsCommand: Spt,
      ListBucketsCommand: Exe,
      ListDirectoryBucketsCommand: vxe,
      ListMultipartUploadsCommand: wpt,
      ListObjectsCommand: xpt,
      ListObjectsV2Command: Cxe,
      ListObjectVersionsCommand: Tpt,
      ListPartsCommand: Sxe,
      PutBucketAbacCommand: Dpt,
      PutBucketAccelerateConfigurationCommand: Ipt,
      PutBucketAclCommand: Rpt,
      PutBucketAnalyticsConfigurationCommand: kpt,
      PutBucketCorsCommand: Opt,
      PutBucketEncryptionCommand: Npt,
      PutBucketIntelligentTieringConfigurationCommand: Ppt,
      PutBucketInventoryConfigurationCommand: Bpt,
      PutBucketLifecycleConfigurationCommand: Lpt,
      PutBucketLoggingCommand: Mpt,
      PutBucketMetricsConfigurationCommand: Fpt,
      PutBucketNotificationConfigurationCommand: Upt,
      PutBucketOwnershipControlsCommand: $pt,
      PutBucketPolicyCommand: jpt,
      PutBucketReplicationCommand: Qpt,
      PutBucketRequestPaymentCommand: Gpt,
      PutBucketTaggingCommand: qpt,
      PutBucketVersioningCommand: Hpt,
      PutBucketWebsiteCommand: Vpt,
      PutObjectCommand: zpt,
      PutObjectAclCommand: Wpt,
      PutObjectLegalHoldCommand: Ypt,
      PutObjectLockConfigurationCommand: Kpt,
      PutObjectRetentionCommand: Jpt,
      PutObjectTaggingCommand: Xpt,
      PutPublicAccessBlockCommand: Zpt,
      RenameObjectCommand: eht,
      RestoreObjectCommand: tht,
      SelectObjectContentCommand: rht,
      UpdateBucketMetadataInventoryTableConfigurationCommand: nht,
      UpdateBucketMetadataJournalTableConfigurationCommand: iht,
      UploadPartCommand: oht,
      UploadPartCopyCommand: sht,
      WriteGetObjectResponseCommand: aht,
    },
    uht = class extends aj {};
  Rr.createAggregatedClient(Ieu, uht);
  var Reu = jK.createPaginator(aj, Exe, "ContinuationToken", "ContinuationToken", "MaxBuckets"),
    keu = jK.createPaginator(aj, vxe, "ContinuationToken", "ContinuationToken", "MaxDirectoryBuckets"),
    Oeu = jK.createPaginator(aj, Cxe, "ContinuationToken", "NextContinuationToken", "MaxKeys"),
    Neu = jK.createPaginator(aj, Sxe, "PartNumberMarker", "NextPartNumberMarker", "MaxParts"),
    HLi = async (t, e) => {
      let r;
      try {
        return ((r = await t.send(new Tde(e))), { state: w1.WaiterState.SUCCESS, reason: r });
      } catch (n) {
        if (((r = n), n.name && n.name == "NotFound")) return { state: w1.WaiterState.RETRY, reason: r };
      }
      return { state: w1.WaiterState.RETRY, reason: r };
    },
    Peu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 };
      return w1.createWaiter({ ...r, ...t }, e, HLi);
    },
    Beu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 },
        n = await w1.createWaiter({ ...r, ...t }, e, HLi);
      return w1.checkExceptions(n);
    },
    VLi = async (t, e) => {
      let r;
      try {
        r = await t.send(new Tde(e));
      } catch (n) {
        if (((r = n), n.name && n.name == "NotFound")) return { state: w1.WaiterState.SUCCESS, reason: r };
      }
      return { state: w1.WaiterState.RETRY, reason: r };
    },
    Leu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 };
      return w1.createWaiter({ ...r, ...t }, e, VLi);
    },
    Meu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 },
        n = await w1.createWaiter({ ...r, ...t }, e, VLi);
      return w1.checkExceptions(n);
    },
    WLi = async (t, e) => {
      let r;
      try {
        return ((r = await t.send(new Dde(e))), { state: w1.WaiterState.SUCCESS, reason: r });
      } catch (n) {
        if (((r = n), n.name && n.name == "NotFound")) return { state: w1.WaiterState.RETRY, reason: r };
      }
      return { state: w1.WaiterState.RETRY, reason: r };
    },
    Feu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 };
      return w1.createWaiter({ ...r, ...t }, e, WLi);
    },
    Ueu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 },
        n = await w1.createWaiter({ ...r, ...t }, e, WLi);
      return w1.checkExceptions(n);
    },
    zLi = async (t, e) => {
      let r;
      try {
        r = await t.send(new Dde(e));
      } catch (n) {
        if (((r = n), n.name && n.name == "NotFound")) return { state: w1.WaiterState.SUCCESS, reason: r };
      }
      return { state: w1.WaiterState.RETRY, reason: r };
    },
    $eu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 };
      return w1.createWaiter({ ...r, ...t }, e, zLi);
    },
    jeu = async (t, e) => {
      let r = { minDelay: 5, maxDelay: 120 },
        n = await w1.createWaiter({ ...r, ...t }, e, zLi);
      return w1.checkExceptions(n);
    },
    Qeu = { Disabled: "Disabled", Enabled: "Enabled" },
    Geu = { requester: "requester" },
    qeu = { requester: "requester" },
    Heu = { Enabled: "Enabled", Suspended: "Suspended" },
    Veu = { AmazonCustomerByEmail: "AmazonCustomerByEmail", CanonicalUser: "CanonicalUser", Group: "Group" },
    Weu = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", READ_ACP: "READ_ACP", WRITE: "WRITE", WRITE_ACP: "WRITE_ACP" },
    zeu = { Destination: "Destination" },
    Yeu = { COMPOSITE: "COMPOSITE", FULL_OBJECT: "FULL_OBJECT" },
    Keu = { AES256: "AES256", aws_fsx: "aws:fsx", aws_kms: "aws:kms", aws_kms_dsse: "aws:kms:dsse" },
    Jeu = {
      authenticated_read: "authenticated-read",
      aws_exec_read: "aws-exec-read",
      bucket_owner_full_control: "bucket-owner-full-control",
      bucket_owner_read: "bucket-owner-read",
      private: "private",
      public_read: "public-read",
      public_read_write: "public-read-write",
    },
    Xeu = { CRC32: "CRC32", CRC32C: "CRC32C", CRC64NVME: "CRC64NVME", SHA1: "SHA1", SHA256: "SHA256" },
    Zeu = { COPY: "COPY", REPLACE: "REPLACE" },
    etu = { OFF: "OFF", ON: "ON" },
    ttu = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" },
    rtu = {
      DEEP_ARCHIVE: "DEEP_ARCHIVE",
      EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
      FSX_ONTAP: "FSX_ONTAP",
      FSX_OPENZFS: "FSX_OPENZFS",
      GLACIER: "GLACIER",
      GLACIER_IR: "GLACIER_IR",
      INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
      ONEZONE_IA: "ONEZONE_IA",
      OUTPOSTS: "OUTPOSTS",
      REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
      SNOW: "SNOW",
      STANDARD: "STANDARD",
      STANDARD_IA: "STANDARD_IA",
    },
    ntu = { COPY: "COPY", REPLACE: "REPLACE" },
    itu = {
      authenticated_read: "authenticated-read",
      private: "private",
      public_read: "public-read",
      public_read_write: "public-read-write",
    },
    otu = { SingleAvailabilityZone: "SingleAvailabilityZone", SingleLocalZone: "SingleLocalZone" },
    stu = { Directory: "Directory" },
    atu = { AvailabilityZone: "AvailabilityZone", LocalZone: "LocalZone" },
    utu = {
      EU: "EU",
      af_south_1: "af-south-1",
      ap_east_1: "ap-east-1",
      ap_northeast_1: "ap-northeast-1",
      ap_northeast_2: "ap-northeast-2",
      ap_northeast_3: "ap-northeast-3",
      ap_south_1: "ap-south-1",
      ap_south_2: "ap-south-2",
      ap_southeast_1: "ap-southeast-1",
      ap_southeast_2: "ap-southeast-2",
      ap_southeast_3: "ap-southeast-3",
      ap_southeast_4: "ap-southeast-4",
      ap_southeast_5: "ap-southeast-5",
      ca_central_1: "ca-central-1",
      cn_north_1: "cn-north-1",
      cn_northwest_1: "cn-northwest-1",
      eu_central_1: "eu-central-1",
      eu_central_2: "eu-central-2",
      eu_north_1: "eu-north-1",
      eu_south_1: "eu-south-1",
      eu_south_2: "eu-south-2",
      eu_west_1: "eu-west-1",
      eu_west_2: "eu-west-2",
      eu_west_3: "eu-west-3",
      il_central_1: "il-central-1",
      me_central_1: "me-central-1",
      me_south_1: "me-south-1",
      sa_east_1: "sa-east-1",
      us_east_2: "us-east-2",
      us_gov_east_1: "us-gov-east-1",
      us_gov_west_1: "us-gov-west-1",
      us_west_1: "us-west-1",
      us_west_2: "us-west-2",
    },
    ctu = {
      BucketOwnerEnforced: "BucketOwnerEnforced",
      BucketOwnerPreferred: "BucketOwnerPreferred",
      ObjectWriter: "ObjectWriter",
    },
    ltu = { DISABLED: "DISABLED", ENABLED: "ENABLED" },
    mtu = { AES256: "AES256", aws_kms: "aws:kms" },
    dtu = { DISABLED: "DISABLED", ENABLED: "ENABLED" },
    ftu = { ReadOnly: "ReadOnly", ReadWrite: "ReadWrite" },
    ptu = { CSV: "CSV" },
    htu = { V_1: "V_1" },
    gtu = { NONE: "NONE", SSE_C: "SSE-C" },
    btu = { Disabled: "Disabled", Enabled: "Enabled" },
    Atu = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" },
    ytu = { CSV: "CSV", ORC: "ORC", Parquet: "Parquet" },
    _tu = { All: "All", Current: "Current" },
    Etu = {
      BucketKeyStatus: "BucketKeyStatus",
      ChecksumAlgorithm: "ChecksumAlgorithm",
      ETag: "ETag",
      EncryptionStatus: "EncryptionStatus",
      IntelligentTieringAccessTier: "IntelligentTieringAccessTier",
      IsMultipartUploaded: "IsMultipartUploaded",
      LastModifiedDate: "LastModifiedDate",
      LifecycleExpirationDate: "LifecycleExpirationDate",
      ObjectAccessControlList: "ObjectAccessControlList",
      ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus",
      ObjectLockMode: "ObjectLockMode",
      ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate",
      ObjectOwner: "ObjectOwner",
      ReplicationStatus: "ReplicationStatus",
      Size: "Size",
      StorageClass: "StorageClass",
    },
    vtu = { Daily: "Daily", Weekly: "Weekly" },
    Ctu = {
      DEEP_ARCHIVE: "DEEP_ARCHIVE",
      GLACIER: "GLACIER",
      GLACIER_IR: "GLACIER_IR",
      INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
      ONEZONE_IA: "ONEZONE_IA",
      STANDARD_IA: "STANDARD_IA",
    },
    Stu = { Disabled: "Disabled", Enabled: "Enabled" },
    wtu = { all_storage_classes_128K: "all_storage_classes_128K", varies_by_storage_class: "varies_by_storage_class" },
    xtu = { FULL_CONTROL: "FULL_CONTROL", READ: "READ", WRITE: "WRITE" },
    Ttu = { DeliveryTime: "DeliveryTime", EventTime: "EventTime" },
    Dtu = { aws: "aws", customer: "customer" },
    Itu = {
      s3_IntelligentTiering: "s3:IntelligentTiering",
      s3_LifecycleExpiration_: "s3:LifecycleExpiration:*",
      s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete",
      s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated",
      s3_LifecycleTransition: "s3:LifecycleTransition",
      s3_ObjectAcl_Put: "s3:ObjectAcl:Put",
      s3_ObjectCreated_: "s3:ObjectCreated:*",
      s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload",
      s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy",
      s3_ObjectCreated_Post: "s3:ObjectCreated:Post",
      s3_ObjectCreated_Put: "s3:ObjectCreated:Put",
      s3_ObjectRemoved_: "s3:ObjectRemoved:*",
      s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete",
      s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated",
      s3_ObjectRestore_: "s3:ObjectRestore:*",
      s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed",
      s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete",
      s3_ObjectRestore_Post: "s3:ObjectRestore:Post",
      s3_ObjectTagging_: "s3:ObjectTagging:*",
      s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete",
      s3_ObjectTagging_Put: "s3:ObjectTagging:Put",
      s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject",
      s3_Replication_: "s3:Replication:*",
      s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication",
      s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold",
      s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked",
      s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold",
    },
    Rtu = { prefix: "prefix", suffix: "suffix" },
    ktu = { Disabled: "Disabled", Enabled: "Enabled" },
    Otu = { Disabled: "Disabled", Enabled: "Enabled" },
    Ntu = { Disabled: "Disabled", Enabled: "Enabled" },
    Ptu = { Disabled: "Disabled", Enabled: "Enabled" },
    Btu = { Disabled: "Disabled", Enabled: "Enabled" },
    Ltu = { Disabled: "Disabled", Enabled: "Enabled" },
    Mtu = { Disabled: "Disabled", Enabled: "Enabled" },
    Ftu = { BucketOwner: "BucketOwner", Requester: "Requester" },
    Utu = { Disabled: "Disabled", Enabled: "Enabled" },
    $tu = { Enabled: "Enabled", Suspended: "Suspended" },
    jtu = { http: "http", https: "https" },
    Qtu = { COMPLETE: "COMPLETE", COMPLETED: "COMPLETED", FAILED: "FAILED", PENDING: "PENDING", REPLICA: "REPLICA" },
    Gtu = { ENABLED: "ENABLED" },
    qtu = {
      CHECKSUM: "Checksum",
      ETAG: "ETag",
      OBJECT_PARTS: "ObjectParts",
      OBJECT_SIZE: "ObjectSize",
      STORAGE_CLASS: "StorageClass",
    },
    Htu = { Enabled: "Enabled" },
    Vtu = { COMPLIANCE: "COMPLIANCE", GOVERNANCE: "GOVERNANCE" },
    Wtu = { ARCHIVE_ACCESS: "ARCHIVE_ACCESS", DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS" },
    ztu = { url: "url" },
    Ytu = {
      DEEP_ARCHIVE: "DEEP_ARCHIVE",
      EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
      FSX_ONTAP: "FSX_ONTAP",
      FSX_OPENZFS: "FSX_OPENZFS",
      GLACIER: "GLACIER",
      GLACIER_IR: "GLACIER_IR",
      INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
      ONEZONE_IA: "ONEZONE_IA",
      OUTPOSTS: "OUTPOSTS",
      REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
      SNOW: "SNOW",
      STANDARD: "STANDARD",
      STANDARD_IA: "STANDARD_IA",
    },
    Ktu = { RESTORE_STATUS: "RestoreStatus" },
    Jtu = { STANDARD: "STANDARD" },
    Xtu = { Disabled: "Disabled", Enabled: "Enabled" },
    Ztu = { Bulk: "Bulk", Expedited: "Expedited", Standard: "Standard" },
    eru = { SQL: "SQL" },
    tru = { BZIP2: "BZIP2", GZIP: "GZIP", NONE: "NONE" },
    rru = { IGNORE: "IGNORE", NONE: "NONE", USE: "USE" },
    nru = { DOCUMENT: "DOCUMENT", LINES: "LINES" },
    iru = { ALWAYS: "ALWAYS", ASNEEDED: "ASNEEDED" },
    oru = { SELECT: "SELECT" };
  Object.defineProperty(Ee, "$Command", {
    enumerable: !0,
    get: function () {
      return Rr.Command;
    },
  });
  Object.defineProperty(Ee, "__Client", {
    enumerable: !0,
    get: function () {
      return Rr.Client;
    },
  });
  Ee.AbacStatus$ = Y5r;
  Ee.AbortIncompleteMultipartUpload$ = ZIi;
  Ee.AbortMultipartUpload$ = WPi;
  Ee.AbortMultipartUploadCommand = bft;
  Ee.AbortMultipartUploadOutput$ = e7i;
  Ee.AbortMultipartUploadRequest$ = t7i;
  Ee.AccelerateConfiguration$ = r7i;
  Ee.AccessControlPolicy$ = K5r;
  Ee.AccessControlTranslation$ = n7i;
  Ee.AnalyticsAndOperator$ = i7i;
  Ee.AnalyticsConfiguration$ = xht;
  Ee.AnalyticsExportDestination$ = o7i;
  Ee.AnalyticsFilter$ = qPi;
  Ee.AnalyticsS3BucketDestination$ = s7i;
  Ee.AnalyticsS3ExportFileFormat = ptu;
  Ee.ArchiveStatus = Wtu;
  Ee.BlockedEncryptionTypes$ = a7i;
  Ee.Bucket$ = u7i;
  Ee.BucketAbacStatus = Qeu;
  Ee.BucketAccelerateStatus = Heu;
  Ee.BucketAlreadyExists = F1t;
  Ee.BucketAlreadyExists$ = c7i;
  Ee.BucketAlreadyOwnedByYou = U1t;
  Ee.BucketAlreadyOwnedByYou$ = l7i;
  Ee.BucketCannedACL = itu;
  Ee.BucketInfo$ = m7i;
  Ee.BucketLifecycleConfiguration$ = d7i;
  Ee.BucketLocationConstraint = utu;
  Ee.BucketLoggingStatus$ = f7i;
  Ee.BucketLogsPermission = xtu;
  Ee.BucketType = stu;
  Ee.BucketVersioningStatus = $tu;
  Ee.CORSConfiguration$ = x7i;
  Ee.CORSRule$ = T7i;
  Ee.CSVInput$ = M7i;
  Ee.CSVOutput$ = F7i;
  Ee.Checksum$ = p7i;
  Ee.ChecksumAlgorithm = Xeu;
  Ee.ChecksumMode = Gtu;
  Ee.ChecksumType = Yeu;
  Ee.CommonPrefix$ = h7i;
  Ee.CompleteMultipartUpload$ = zPi;
  Ee.CompleteMultipartUploadCommand = Aft;
  Ee.CompleteMultipartUploadOutput$ = A7i;
  Ee.CompleteMultipartUploadRequest$ = y7i;
  Ee.CompletedMultipartUpload$ = g7i;
  Ee.CompletedPart$ = b7i;
  Ee.CompressionType = tru;
  Ee.Condition$ = _7i;
  Ee.ContinuationEvent$ = E7i;
  Ee.CopyObject$ = YPi;
  Ee.CopyObjectCommand = yft;
  Ee.CopyObjectOutput$ = v7i;
  Ee.CopyObjectRequest$ = C7i;
  Ee.CopyObjectResult$ = S7i;
  Ee.CopyPartResult$ = w7i;
  Ee.CreateBucket$ = KPi;
  Ee.CreateBucketCommand = _ft;
  Ee.CreateBucketConfiguration$ = D7i;
  Ee.CreateBucketMetadataConfiguration$ = JPi;
  Ee.CreateBucketMetadataConfigurationCommand = Eft;
  Ee.CreateBucketMetadataConfigurationRequest$ = I7i;
  Ee.CreateBucketMetadataTableConfiguration$ = XPi;
  Ee.CreateBucketMetadataTableConfigurationCommand = vft;
  Ee.CreateBucketMetadataTableConfigurationRequest$ = R7i;
  Ee.CreateBucketOutput$ = k7i;
  Ee.CreateBucketRequest$ = O7i;
  Ee.CreateMultipartUpload$ = ZPi;
  Ee.CreateMultipartUploadCommand = Cft;
  Ee.CreateMultipartUploadOutput$ = N7i;
  Ee.CreateMultipartUploadRequest$ = P7i;
  Ee.CreateSession$ = eBi;
  Ee.CreateSessionCommand = _xe;
  Ee.CreateSessionOutput$ = B7i;
  Ee.CreateSessionRequest$ = L7i;
  Ee.DataRedundancy = otu;
  Ee.DefaultRetention$ = U7i;
  Ee.Delete$ = $7i;
  Ee.DeleteBucket$ = tBi;
  Ee.DeleteBucketAnalyticsConfiguration$ = rBi;
  Ee.DeleteBucketAnalyticsConfigurationCommand = Sft;
  Ee.DeleteBucketAnalyticsConfigurationRequest$ = j7i;
  Ee.DeleteBucketCommand = wft;
  Ee.DeleteBucketCors$ = nBi;
  Ee.DeleteBucketCorsCommand = xft;
  Ee.DeleteBucketCorsRequest$ = Q7i;
  Ee.DeleteBucketEncryption$ = iBi;
  Ee.DeleteBucketEncryptionCommand = Tft;
  Ee.DeleteBucketEncryptionRequest$ = G7i;
  Ee.DeleteBucketIntelligentTieringConfiguration$ = oBi;
  Ee.DeleteBucketIntelligentTieringConfigurationCommand = Dft;
  Ee.DeleteBucketIntelligentTieringConfigurationRequest$ = q7i;
  Ee.DeleteBucketInventoryConfiguration$ = sBi;
  Ee.DeleteBucketInventoryConfigurationCommand = Ift;
  Ee.DeleteBucketInventoryConfigurationRequest$ = H7i;
  Ee.DeleteBucketLifecycle$ = aBi;
  Ee.DeleteBucketLifecycleCommand = Rft;
  Ee.DeleteBucketLifecycleRequest$ = V7i;
  Ee.DeleteBucketMetadataConfiguration$ = uBi;
  Ee.DeleteBucketMetadataConfigurationCommand = kft;
  Ee.DeleteBucketMetadataConfigurationRequest$ = W7i;
  Ee.DeleteBucketMetadataTableConfiguration$ = cBi;
  Ee.DeleteBucketMetadataTableConfigurationCommand = Oft;
  Ee.DeleteBucketMetadataTableConfigurationRequest$ = z7i;
  Ee.DeleteBucketMetricsConfiguration$ = lBi;
  Ee.DeleteBucketMetricsConfigurationCommand = Nft;
  Ee.DeleteBucketMetricsConfigurationRequest$ = Y7i;
  Ee.DeleteBucketOwnershipControls$ = mBi;
  Ee.DeleteBucketOwnershipControlsCommand = Pft;
  Ee.DeleteBucketOwnershipControlsRequest$ = K7i;
  Ee.DeleteBucketPolicy$ = dBi;
  Ee.DeleteBucketPolicyCommand = Bft;
  Ee.DeleteBucketPolicyRequest$ = J7i;
  Ee.DeleteBucketReplication$ = fBi;
  Ee.DeleteBucketReplicationCommand = Lft;
  Ee.DeleteBucketReplicationRequest$ = X7i;
  Ee.DeleteBucketRequest$ = Z7i;
  Ee.DeleteBucketTagging$ = pBi;
  Ee.DeleteBucketTaggingCommand = Mft;
  Ee.DeleteBucketTaggingRequest$ = eRi;
  Ee.DeleteBucketWebsite$ = hBi;
  Ee.DeleteBucketWebsiteCommand = Fft;
  Ee.DeleteBucketWebsiteRequest$ = tRi;
  Ee.DeleteMarkerEntry$ = nRi;
  Ee.DeleteMarkerReplication$ = iRi;
  Ee.DeleteMarkerReplicationStatus = ktu;
  Ee.DeleteObject$ = gBi;
  Ee.DeleteObjectCommand = Uft;
  Ee.DeleteObjectOutput$ = oRi;
  Ee.DeleteObjectRequest$ = sRi;
  Ee.DeleteObjectTagging$ = ABi;
  Ee.DeleteObjectTaggingCommand = jft;
  Ee.DeleteObjectTaggingOutput$ = cRi;
  Ee.DeleteObjectTaggingRequest$ = lRi;
  Ee.DeleteObjects$ = bBi;
  Ee.DeleteObjectsCommand = $ft;
  Ee.DeleteObjectsOutput$ = aRi;
  Ee.DeleteObjectsRequest$ = uRi;
  Ee.DeletePublicAccessBlock$ = yBi;
  Ee.DeletePublicAccessBlockCommand = Qft;
  Ee.DeletePublicAccessBlockRequest$ = mRi;
  Ee.DeletedObject$ = rRi;
  Ee.Destination$ = dRi;
  Ee.DestinationResult$ = fRi;
  Ee.EncodingType = ztu;
  Ee.Encryption$ = pRi;
  Ee.EncryptionConfiguration$ = hRi;
  Ee.EncryptionType = gtu;
  Ee.EncryptionTypeMismatch = q1t;
  Ee.EncryptionTypeMismatch$ = gRi;
  Ee.EndEvent$ = bRi;
  Ee.ErrorDetails$ = Tht;
  Ee.ErrorDocument$ = J5r;
  Ee.Event = Itu;
  Ee.EventBridgeConfiguration$ = yRi;
  Ee.ExistingObjectReplication$ = _Ri;
  Ee.ExistingObjectReplicationStatus = Ptu;
  Ee.ExpirationState = dtu;
  Ee.ExpirationStatus = Stu;
  Ee.ExpressionType = eru;
  Ee.FileHeaderInfo = rru;
  Ee.FilterRule$ = ERi;
  Ee.FilterRuleName = Rtu;
  Ee.GetBucketAbac$ = _Bi;
  Ee.GetBucketAbacCommand = Gft;
  Ee.GetBucketAbacOutput$ = vRi;
  Ee.GetBucketAbacRequest$ = CRi;
  Ee.GetBucketAccelerateConfiguration$ = EBi;
  Ee.GetBucketAccelerateConfigurationCommand = qft;
  Ee.GetBucketAccelerateConfigurationOutput$ = SRi;
  Ee.GetBucketAccelerateConfigurationRequest$ = wRi;
  Ee.GetBucketAcl$ = vBi;
  Ee.GetBucketAclCommand = Hft;
  Ee.GetBucketAclOutput$ = xRi;
  Ee.GetBucketAclRequest$ = TRi;
  Ee.GetBucketAnalyticsConfiguration$ = CBi;
  Ee.GetBucketAnalyticsConfigurationCommand = Vft;
  Ee.GetBucketAnalyticsConfigurationOutput$ = DRi;
  Ee.GetBucketAnalyticsConfigurationRequest$ = IRi;
  Ee.GetBucketCors$ = SBi;
  Ee.GetBucketCorsCommand = Wft;
  Ee.GetBucketCorsOutput$ = RRi;
  Ee.GetBucketCorsRequest$ = kRi;
  Ee.GetBucketEncryption$ = wBi;
  Ee.GetBucketEncryptionCommand = zft;
  Ee.GetBucketEncryptionOutput$ = ORi;
  Ee.GetBucketEncryptionRequest$ = NRi;
  Ee.GetBucketIntelligentTieringConfiguration$ = xBi;
  Ee.GetBucketIntelligentTieringConfigurationCommand = Yft;
  Ee.GetBucketIntelligentTieringConfigurationOutput$ = PRi;
  Ee.GetBucketIntelligentTieringConfigurationRequest$ = BRi;
  Ee.GetBucketInventoryConfiguration$ = TBi;
  Ee.GetBucketInventoryConfigurationCommand = Kft;
  Ee.GetBucketInventoryConfigurationOutput$ = LRi;
  Ee.GetBucketInventoryConfigurationRequest$ = MRi;
  Ee.GetBucketLifecycleConfiguration$ = DBi;
  Ee.GetBucketLifecycleConfigurationCommand = Jft;
  Ee.GetBucketLifecycleConfigurationOutput$ = FRi;
  Ee.GetBucketLifecycleConfigurationRequest$ = URi;
  Ee.GetBucketLocation$ = IBi;
  Ee.GetBucketLocationCommand = Xft;
  Ee.GetBucketLocationOutput$ = $Ri;
  Ee.GetBucketLocationRequest$ = jRi;
  Ee.GetBucketLogging$ = RBi;
  Ee.GetBucketLoggingCommand = Zft;
  Ee.GetBucketLoggingOutput$ = QRi;
  Ee.GetBucketLoggingRequest$ = GRi;
  Ee.GetBucketMetadataConfiguration$ = kBi;
  Ee.GetBucketMetadataConfigurationCommand = ept;
  Ee.GetBucketMetadataConfigurationOutput$ = qRi;
  Ee.GetBucketMetadataConfigurationRequest$ = HRi;
  Ee.GetBucketMetadataConfigurationResult$ = VRi;
  Ee.GetBucketMetadataTableConfiguration$ = OBi;
  Ee.GetBucketMetadataTableConfigurationCommand = tpt;
  Ee.GetBucketMetadataTableConfigurationOutput$ = WRi;
  Ee.GetBucketMetadataTableConfigurationRequest$ = zRi;
  Ee.GetBucketMetadataTableConfigurationResult$ = YRi;
  Ee.GetBucketMetricsConfiguration$ = NBi;
  Ee.GetBucketMetricsConfigurationCommand = rpt;
  Ee.GetBucketMetricsConfigurationOutput$ = KRi;
  Ee.GetBucketMetricsConfigurationRequest$ = JRi;
  Ee.GetBucketNotificationConfiguration$ = PBi;
  Ee.GetBucketNotificationConfigurationCommand = npt;
  Ee.GetBucketNotificationConfigurationRequest$ = XRi;
  Ee.GetBucketOwnershipControls$ = BBi;
  Ee.GetBucketOwnershipControlsCommand = ipt;
  Ee.GetBucketOwnershipControlsOutput$ = ZRi;
  Ee.GetBucketOwnershipControlsRequest$ = eki;
  Ee.GetBucketPolicy$ = LBi;
  Ee.GetBucketPolicyCommand = opt;
  Ee.GetBucketPolicyOutput$ = tki;
  Ee.GetBucketPolicyRequest$ = rki;
  Ee.GetBucketPolicyStatus$ = MBi;
  Ee.GetBucketPolicyStatusCommand = spt;
  Ee.GetBucketPolicyStatusOutput$ = nki;
  Ee.GetBucketPolicyStatusRequest$ = iki;
  Ee.GetBucketReplication$ = FBi;
  Ee.GetBucketReplicationCommand = apt;
  Ee.GetBucketReplicationOutput$ = oki;
  Ee.GetBucketReplicationRequest$ = ski;
  Ee.GetBucketRequestPayment$ = UBi;
  Ee.GetBucketRequestPaymentCommand = upt;
  Ee.GetBucketRequestPaymentOutput$ = aki;
  Ee.GetBucketRequestPaymentRequest$ = uki;
  Ee.GetBucketTagging$ = $Bi;
  Ee.GetBucketTaggingCommand = cpt;
  Ee.GetBucketTaggingOutput$ = cki;
  Ee.GetBucketTaggingRequest$ = lki;
  Ee.GetBucketVersioning$ = jBi;
  Ee.GetBucketVersioningCommand = lpt;
  Ee.GetBucketVersioningOutput$ = mki;
  Ee.GetBucketVersioningRequest$ = dki;
  Ee.GetBucketWebsite$ = QBi;
  Ee.GetBucketWebsiteCommand = mpt;
  Ee.GetBucketWebsiteOutput$ = fki;
  Ee.GetBucketWebsiteRequest$ = pki;
  Ee.GetObject$ = GBi;
  Ee.GetObjectAcl$ = qBi;
  Ee.GetObjectAclCommand = dpt;
  Ee.GetObjectAclOutput$ = hki;
  Ee.GetObjectAclRequest$ = gki;
  Ee.GetObjectAttributes$ = HBi;
  Ee.GetObjectAttributesCommand = fpt;
  Ee.GetObjectAttributesOutput$ = bki;
  Ee.GetObjectAttributesParts$ = Aki;
  Ee.GetObjectAttributesRequest$ = yki;
  Ee.GetObjectCommand = ppt;
  Ee.GetObjectLegalHold$ = VBi;
  Ee.GetObjectLegalHoldCommand = hpt;
  Ee.GetObjectLegalHoldOutput$ = _ki;
  Ee.GetObjectLegalHoldRequest$ = Eki;
  Ee.GetObjectLockConfiguration$ = WBi;
  Ee.GetObjectLockConfigurationCommand = gpt;
  Ee.GetObjectLockConfigurationOutput$ = vki;
  Ee.GetObjectLockConfigurationRequest$ = Cki;
  Ee.GetObjectOutput$ = Ski;
  Ee.GetObjectRequest$ = wki;
  Ee.GetObjectRetention$ = zBi;
  Ee.GetObjectRetentionCommand = bpt;
  Ee.GetObjectRetentionOutput$ = xki;
  Ee.GetObjectRetentionRequest$ = Tki;
  Ee.GetObjectTagging$ = YBi;
  Ee.GetObjectTaggingCommand = Apt;
  Ee.GetObjectTaggingOutput$ = Dki;
  Ee.GetObjectTaggingRequest$ = Iki;
  Ee.GetObjectTorrent$ = KBi;
  Ee.GetObjectTorrentCommand = ypt;
  Ee.GetObjectTorrentOutput$ = Rki;
  Ee.GetObjectTorrentRequest$ = kki;
  Ee.GetPublicAccessBlock$ = JBi;
  Ee.GetPublicAccessBlockCommand = _pt;
  Ee.GetPublicAccessBlockOutput$ = Oki;
  Ee.GetPublicAccessBlockRequest$ = Nki;
  Ee.GlacierJobParameters$ = Pki;
  Ee.Grant$ = Bki;
  Ee.Grantee$ = X5r;
  Ee.HeadBucket$ = XBi;
  Ee.HeadBucketCommand = Tde;
  Ee.HeadBucketOutput$ = Lki;
  Ee.HeadBucketRequest$ = Mki;
  Ee.HeadObject$ = ZBi;
  Ee.HeadObjectCommand = Dde;
  Ee.HeadObjectOutput$ = Fki;
  Ee.HeadObjectRequest$ = Uki;
  Ee.IdempotencyParameterMismatch = z1t;
  Ee.IdempotencyParameterMismatch$ = $ki;
  Ee.IndexDocument$ = Z5r;
  Ee.Initiator$ = e8r;
  Ee.InputSerialization$ = t8r;
  Ee.IntelligentTieringAccessTier = Atu;
  Ee.IntelligentTieringAndOperator$ = jki;
  Ee.IntelligentTieringConfiguration$ = Dht;
  Ee.IntelligentTieringFilter$ = Qki;
  Ee.IntelligentTieringStatus = btu;
  Ee.InvalidObjectState = j1t;
  Ee.InvalidObjectState$ = Gki;
  Ee.InvalidRequest = H1t;
  Ee.InvalidRequest$ = qki;
  Ee.InvalidWriteOffset = V1t;
  Ee.InvalidWriteOffset$ = Hki;
  Ee.InventoryConfiguration$ = Iht;
  Ee.InventoryConfigurationState = ltu;
  Ee.InventoryDestination$ = Vki;
  Ee.InventoryEncryption$ = Wki;
  Ee.InventoryFilter$ = zki;
  Ee.InventoryFormat = ytu;
  Ee.InventoryFrequency = vtu;
  Ee.InventoryIncludedObjectVersions = _tu;
  Ee.InventoryOptionalField = Etu;
  Ee.InventoryS3BucketDestination$ = Yki;
  Ee.InventorySchedule$ = Kki;
  Ee.InventoryTableConfiguration$ = Jki;
  Ee.InventoryTableConfigurationResult$ = Xki;
  Ee.InventoryTableConfigurationUpdates$ = Zki;
  Ee.JSONInput$ = nOi;
  Ee.JSONOutput$ = iOi;
  Ee.JSONType = nru;
  Ee.JournalTableConfiguration$ = eOi;
  Ee.JournalTableConfigurationResult$ = tOi;
  Ee.JournalTableConfigurationUpdates$ = rOi;
  Ee.LambdaFunctionConfiguration$ = oOi;
  Ee.LifecycleExpiration$ = sOi;
  Ee.LifecycleRule$ = aOi;
  Ee.LifecycleRuleAndOperator$ = uOi;
  Ee.LifecycleRuleFilter$ = cOi;
  Ee.ListBucketAnalyticsConfigurations$ = eLi;
  Ee.ListBucketAnalyticsConfigurationsCommand = Ept;
  Ee.ListBucketAnalyticsConfigurationsOutput$ = lOi;
  Ee.ListBucketAnalyticsConfigurationsRequest$ = mOi;
  Ee.ListBucketIntelligentTieringConfigurations$ = tLi;
  Ee.ListBucketIntelligentTieringConfigurationsCommand = vpt;
  Ee.ListBucketIntelligentTieringConfigurationsOutput$ = dOi;
  Ee.ListBucketIntelligentTieringConfigurationsRequest$ = fOi;
  Ee.ListBucketInventoryConfigurations$ = rLi;
  Ee.ListBucketInventoryConfigurationsCommand = Cpt;
  Ee.ListBucketInventoryConfigurationsOutput$ = pOi;
  Ee.ListBucketInventoryConfigurationsRequest$ = hOi;
  Ee.ListBucketMetricsConfigurations$ = nLi;
  Ee.ListBucketMetricsConfigurationsCommand = Spt;
  Ee.ListBucketMetricsConfigurationsOutput$ = gOi;
  Ee.ListBucketMetricsConfigurationsRequest$ = bOi;
  Ee.ListBuckets$ = iLi;
  Ee.ListBucketsCommand = Exe;
  Ee.ListBucketsOutput$ = AOi;
  Ee.ListBucketsRequest$ = yOi;
  Ee.ListDirectoryBuckets$ = oLi;
  Ee.ListDirectoryBucketsCommand = vxe;
  Ee.ListDirectoryBucketsOutput$ = _Oi;
  Ee.ListDirectoryBucketsRequest$ = EOi;
  Ee.ListMultipartUploads$ = sLi;
  Ee.ListMultipartUploadsCommand = wpt;
  Ee.ListMultipartUploadsOutput$ = vOi;
  Ee.ListMultipartUploadsRequest$ = COi;
  Ee.ListObjectVersions$ = cLi;
  Ee.ListObjectVersionsCommand = Tpt;
  Ee.ListObjectVersionsOutput$ = DOi;
  Ee.ListObjectVersionsRequest$ = IOi;
  Ee.ListObjects$ = aLi;
  Ee.ListObjectsCommand = xpt;
  Ee.ListObjectsOutput$ = SOi;
  Ee.ListObjectsRequest$ = wOi;
  Ee.ListObjectsV2$ = uLi;
  Ee.ListObjectsV2Command = Cxe;
  Ee.ListObjectsV2Output$ = xOi;
  Ee.ListObjectsV2Request$ = TOi;
  Ee.ListParts$ = lLi;
  Ee.ListPartsCommand = Sxe;
  Ee.ListPartsOutput$ = ROi;
  Ee.ListPartsRequest$ = kOi;
  Ee.LocationInfo$ = OOi;
  Ee.LocationType = atu;
  Ee.LoggingEnabled$ = r8r;
  Ee.MFADelete = Xtu;
  Ee.MFADeleteStatus = Utu;
  Ee.MetadataConfiguration$ = NOi;
  Ee.MetadataConfigurationResult$ = POi;
  Ee.MetadataDirective = Zeu;
  Ee.MetadataEntry$ = BOi;
  Ee.MetadataTableConfiguration$ = LOi;
  Ee.MetadataTableConfigurationResult$ = MOi;
  Ee.MetadataTableEncryptionConfiguration$ = Rht;
  Ee.Metrics$ = FOi;
  Ee.MetricsAndOperator$ = UOi;
  Ee.MetricsConfiguration$ = kht;
  Ee.MetricsFilter$ = HPi;
  Ee.MetricsStatus = Otu;
  Ee.MultipartUpload$ = $Oi;
  Ee.NoSuchBucket = $1t;
  Ee.NoSuchBucket$ = GOi;
  Ee.NoSuchKey = Q1t;
  Ee.NoSuchKey$ = qOi;
  Ee.NoSuchUpload = L1t;
  Ee.NoSuchUpload$ = HOi;
  Ee.NoncurrentVersionExpiration$ = jOi;
  Ee.NoncurrentVersionTransition$ = QOi;
  Ee.NotFound = G1t;
  Ee.NotFound$ = VOi;
  Ee.NotificationConfiguration$ = n8r;
  Ee.NotificationConfigurationFilter$ = Oht;
  Ee.ObjectAlreadyInActiveTierError = Y1t;
  Ee.ObjectAlreadyInActiveTierError$ = zOi;
  Ee.ObjectAttributes = qtu;
  Ee.ObjectCannedACL = Jeu;
  Ee.ObjectIdentifier$ = YOi;
  Ee.ObjectLockConfiguration$ = i8r;
  Ee.ObjectLockEnabled = Htu;
  Ee.ObjectLockLegalHold$ = o8r;
  Ee.ObjectLockLegalHoldStatus = etu;
  Ee.ObjectLockMode = ttu;
  Ee.ObjectLockRetention$ = s8r;
  Ee.ObjectLockRetentionMode = Vtu;
  Ee.ObjectLockRule$ = KOi;
  Ee.ObjectNotInActiveTierError = M1t;
  Ee.ObjectNotInActiveTierError$ = JOi;
  Ee.ObjectOwnership = ctu;
  Ee.ObjectPart$ = XOi;
  Ee.ObjectStorageClass = Ytu;
  Ee.ObjectVersion$ = ZOi;
  Ee.ObjectVersionStorageClass = Jtu;
  Ee.OptionalObjectAttributes = Ktu;
  Ee.OutputLocation$ = eNi;
  Ee.OutputSerialization$ = a8r;
  Ee.Owner$ = CI;
  Ee.OwnerOverride = zeu;
  Ee.OwnershipControls$ = u8r;
  Ee.OwnershipControlsRule$ = tNi;
  Ee.ParquetInput$ = rNi;
  Ee.Part$ = nNi;
  Ee.PartitionDateSource = Ttu;
  Ee.PartitionedPrefix$ = iNi;
  Ee.Payer = Ftu;
  Ee.Permission = Weu;
  Ee.PolicyStatus$ = oNi;
  Ee.Progress$ = sNi;
  Ee.ProgressEvent$ = aNi;
  Ee.Protocol = jtu;
  Ee.PublicAccessBlockConfiguration$ = c8r;
  Ee.PutBucketAbac$ = mLi;
  Ee.PutBucketAbacCommand = Dpt;
  Ee.PutBucketAbacRequest$ = uNi;
  Ee.PutBucketAccelerateConfiguration$ = dLi;
  Ee.PutBucketAccelerateConfigurationCommand = Ipt;
  Ee.PutBucketAccelerateConfigurationRequest$ = cNi;
  Ee.PutBucketAcl$ = fLi;
  Ee.PutBucketAclCommand = Rpt;
  Ee.PutBucketAclRequest$ = lNi;
  Ee.PutBucketAnalyticsConfiguration$ = pLi;
  Ee.PutBucketAnalyticsConfigurationCommand = kpt;
  Ee.PutBucketAnalyticsConfigurationRequest$ = mNi;
  Ee.PutBucketCors$ = hLi;
  Ee.PutBucketCorsCommand = Opt;
  Ee.PutBucketCorsRequest$ = dNi;
  Ee.PutBucketEncryption$ = gLi;
  Ee.PutBucketEncryptionCommand = Npt;
  Ee.PutBucketEncryptionRequest$ = fNi;
  Ee.PutBucketIntelligentTieringConfiguration$ = bLi;
  Ee.PutBucketIntelligentTieringConfigurationCommand = Ppt;
  Ee.PutBucketIntelligentTieringConfigurationRequest$ = pNi;
  Ee.PutBucketInventoryConfiguration$ = ALi;
  Ee.PutBucketInventoryConfigurationCommand = Bpt;
  Ee.PutBucketInventoryConfigurationRequest$ = hNi;
  Ee.PutBucketLifecycleConfiguration$ = yLi;
  Ee.PutBucketLifecycleConfigurationCommand = Lpt;
  Ee.PutBucketLifecycleConfigurationOutput$ = gNi;
  Ee.PutBucketLifecycleConfigurationRequest$ = bNi;
  Ee.PutBucketLogging$ = _Li;
  Ee.PutBucketLoggingCommand = Mpt;
  Ee.PutBucketLoggingRequest$ = ANi;
  Ee.PutBucketMetricsConfiguration$ = ELi;
  Ee.PutBucketMetricsConfigurationCommand = Fpt;
  Ee.PutBucketMetricsConfigurationRequest$ = yNi;
  Ee.PutBucketNotificationConfiguration$ = vLi;
  Ee.PutBucketNotificationConfigurationCommand = Upt;
  Ee.PutBucketNotificationConfigurationRequest$ = _Ni;
  Ee.PutBucketOwnershipControls$ = CLi;
  Ee.PutBucketOwnershipControlsCommand = $pt;
  Ee.PutBucketOwnershipControlsRequest$ = ENi;
  Ee.PutBucketPolicy$ = SLi;
  Ee.PutBucketPolicyCommand = jpt;
  Ee.PutBucketPolicyRequest$ = vNi;
  Ee.PutBucketReplication$ = wLi;
  Ee.PutBucketReplicationCommand = Qpt;
  Ee.PutBucketReplicationRequest$ = CNi;
  Ee.PutBucketRequestPayment$ = xLi;
  Ee.PutBucketRequestPaymentCommand = Gpt;
  Ee.PutBucketRequestPaymentRequest$ = SNi;
  Ee.PutBucketTagging$ = TLi;
  Ee.PutBucketTaggingCommand = qpt;
  Ee.PutBucketTaggingRequest$ = wNi;
  Ee.PutBucketVersioning$ = DLi;
  Ee.PutBucketVersioningCommand = Hpt;
  Ee.PutBucketVersioningRequest$ = xNi;
  Ee.PutBucketWebsite$ = ILi;
  Ee.PutBucketWebsiteCommand = Vpt;
  Ee.PutBucketWebsiteRequest$ = TNi;
  Ee.PutObject$ = RLi;
  Ee.PutObjectAcl$ = kLi;
  Ee.PutObjectAclCommand = Wpt;
  Ee.PutObjectAclOutput$ = DNi;
  Ee.PutObjectAclRequest$ = INi;
  Ee.PutObjectCommand = zpt;
  Ee.PutObjectLegalHold$ = OLi;
  Ee.PutObjectLegalHoldCommand = Ypt;
  Ee.PutObjectLegalHoldOutput$ = RNi;
  Ee.PutObjectLegalHoldRequest$ = kNi;
  Ee.PutObjectLockConfiguration$ = NLi;
  Ee.PutObjectLockConfigurationCommand = Kpt;
  Ee.PutObjectLockConfigurationOutput$ = ONi;
  Ee.PutObjectLockConfigurationRequest$ = NNi;
  Ee.PutObjectOutput$ = PNi;
  Ee.PutObjectRequest$ = BNi;
  Ee.PutObjectRetention$ = PLi;
  Ee.PutObjectRetentionCommand = Jpt;
  Ee.PutObjectRetentionOutput$ = LNi;
  Ee.PutObjectRetentionRequest$ = MNi;
  Ee.PutObjectTagging$ = BLi;
  Ee.PutObjectTaggingCommand = Xpt;
  Ee.PutObjectTaggingOutput$ = FNi;
  Ee.PutObjectTaggingRequest$ = UNi;
  Ee.PutPublicAccessBlock$ = LLi;
  Ee.PutPublicAccessBlockCommand = Zpt;
  Ee.PutPublicAccessBlockRequest$ = $Ni;
  Ee.QueueConfiguration$ = jNi;
  Ee.QuoteFields = iru;
  Ee.RecordExpiration$ = Nht;
  Ee.RecordsEvent$ = QNi;
  Ee.Redirect$ = GNi;
  Ee.RedirectAllRequestsTo$ = l8r;
  Ee.RenameObject$ = MLi;
  Ee.RenameObjectCommand = eht;
  Ee.RenameObjectOutput$ = qNi;
  Ee.RenameObjectRequest$ = HNi;
  Ee.ReplicaModifications$ = VNi;
  Ee.ReplicaModificationsStatus = Btu;
  Ee.ReplicationConfiguration$ = m8r;
  Ee.ReplicationRule$ = WNi;
  Ee.ReplicationRuleAndOperator$ = zNi;
  Ee.ReplicationRuleFilter$ = YNi;
  Ee.ReplicationRuleStatus = Mtu;
  Ee.ReplicationStatus = Qtu;
  Ee.ReplicationTime$ = KNi;
  Ee.ReplicationTimeStatus = Ntu;
  Ee.ReplicationTimeValue$ = d8r;
  Ee.RequestCharged = Geu;
  Ee.RequestPayer = qeu;
  Ee.RequestPaymentConfiguration$ = JNi;
  Ee.RequestProgress$ = XNi;
  Ee.RestoreObject$ = FLi;
  Ee.RestoreObjectCommand = tht;
  Ee.RestoreObjectOutput$ = ZNi;
  Ee.RestoreObjectRequest$ = ePi;
  Ee.RestoreRequest$ = tPi;
  Ee.RestoreRequestType = oru;
  Ee.RestoreStatus$ = f8r;
  Ee.RoutingRule$ = rPi;
  Ee.S3 = uht;
  Ee.S3Client = aj;
  Ee.S3KeyFilter$ = nPi;
  Ee.S3Location$ = iPi;
  Ee.S3ServiceException = E3;
  Ee.S3ServiceException$ = FPi;
  Ee.S3TablesBucketType = Dtu;
  Ee.S3TablesDestination$ = oPi;
  Ee.S3TablesDestinationResult$ = sPi;
  Ee.SSEKMS$ = gPi;
  Ee.SSES3$ = APi;
  Ee.ScanRange$ = aPi;
  Ee.SelectObjectContent$ = ULi;
  Ee.SelectObjectContentCommand = rht;
  Ee.SelectObjectContentEventStream$ = VPi;
  Ee.SelectObjectContentOutput$ = uPi;
  Ee.SelectObjectContentRequest$ = cPi;
  Ee.SelectParameters$ = lPi;
  Ee.ServerSideEncryption = Keu;
  Ee.ServerSideEncryptionByDefault$ = mPi;
  Ee.ServerSideEncryptionConfiguration$ = p8r;
  Ee.ServerSideEncryptionRule$ = dPi;
  Ee.SessionCredentials$ = fPi;
  Ee.SessionMode = ftu;
  Ee.SimplePrefix$ = pPi;
  Ee.SourceSelectionCriteria$ = hPi;
  Ee.SseKmsEncryptedObjects$ = bPi;
  Ee.SseKmsEncryptedObjectsStatus = Ltu;
  Ee.Stats$ = yPi;
  Ee.StatsEvent$ = _Pi;
  Ee.StorageClass = rtu;
  Ee.StorageClassAnalysis$ = EPi;
  Ee.StorageClassAnalysisDataExport$ = vPi;
  Ee.StorageClassAnalysisSchemaVersion = htu;
  Ee.TableSseAlgorithm = mtu;
  Ee.Tag$ = ZK;
  Ee.Tagging$ = Pht;
  Ee.TaggingDirective = ntu;
  Ee.TargetGrant$ = CPi;
  Ee.TargetObjectKeyFormat$ = SPi;
  Ee.Tier = Ztu;
  Ee.Tiering$ = wPi;
  Ee.TooManyParts = W1t;
  Ee.TooManyParts$ = xPi;
  Ee.TopicConfiguration$ = TPi;
  Ee.Transition$ = DPi;
  Ee.TransitionDefaultMinimumObjectSize = wtu;
  Ee.TransitionStorageClass = Ctu;
  Ee.Type = Veu;
  Ee.UpdateBucketMetadataInventoryTableConfiguration$ = $Li;
  Ee.UpdateBucketMetadataInventoryTableConfigurationCommand = nht;
  Ee.UpdateBucketMetadataInventoryTableConfigurationRequest$ = IPi;
  Ee.UpdateBucketMetadataJournalTableConfiguration$ = jLi;
  Ee.UpdateBucketMetadataJournalTableConfigurationCommand = iht;
  Ee.UpdateBucketMetadataJournalTableConfigurationRequest$ = RPi;
  Ee.UploadPart$ = QLi;
  Ee.UploadPartCommand = oht;
  Ee.UploadPartCopy$ = GLi;
  Ee.UploadPartCopyCommand = sht;
  Ee.UploadPartCopyOutput$ = kPi;
  Ee.UploadPartCopyRequest$ = OPi;
  Ee.UploadPartOutput$ = NPi;
  Ee.UploadPartRequest$ = PPi;
  Ee.VersioningConfiguration$ = BPi;
  Ee.WebsiteConfiguration$ = LPi;
  Ee.WriteGetObjectResponse$ = qLi;
  Ee.WriteGetObjectResponseCommand = aht;
  Ee.WriteGetObjectResponseRequest$ = MPi;
  Ee._Error$ = ARi;
  Ee._Object$ = WOi;
  Ee.paginateListBuckets = Reu;
  Ee.paginateListDirectoryBuckets = keu;
  Ee.paginateListObjectsV2 = Oeu;
  Ee.paginateListParts = Neu;
  Ee.waitForBucketExists = Peu;
  Ee.waitForBucketNotExists = Leu;
  Ee.waitForObjectExists = Feu;
  Ee.waitForObjectNotExists = $eu;
  Ee.waitUntilBucketExists = Beu;
  Ee.waitUntilBucketNotExists = Meu;
  Ee.waitUntilObjectExists = Ueu;
  Ee.waitUntilObjectNotExists = jeu;
});