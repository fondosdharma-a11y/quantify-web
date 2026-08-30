__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},854,[862]);
__d(function(e,t,n,r,s,i,o){"use strict";Object.defineProperty(i,'__esModule',{value:!0}),Object.defineProperty(i,"AbstractUserDataWriter",{enumerable:!0,get:function(){return Rf}}),Object.defineProperty(i,"AggregateField",{enumerable:!0,get:function(){return xd}}),Object.defineProperty(i,"AggregateQuerySnapshot",{enumerable:!0,get:function(){return Dd}}),Object.defineProperty(i,"Bytes",{enumerable:!0,get:function(){return Cd}}),Object.defineProperty(i,"CACHE_SIZE_UNLIMITED",{enumerable:!0,get:function(){return ld}}),Object.defineProperty(i,"CollectionReference",{enumerable:!0,get:function(){return Zh}}),Object.defineProperty(i,"DocumentReference",{enumerable:!0,get:function(){return Jh}}),Object.defineProperty(i,"DocumentSnapshot",{enumerable:!0,get:function(){return Gf}}),Object.defineProperty(i,"FieldPath",{enumerable:!0,get:function(){return Nd}}),Object.defineProperty(i,"FieldValue",{enumerable:!0,get:function(){return kd}}),Object.defineProperty(i,"Firestore",{enumerable:!0,get:function(){return hd}}),Object.defineProperty(i,"FirestoreError",{enumerable:!0,get:function(){return A}}),Object.defineProperty(i,"GeoPoint",{enumerable:!0,get:function(){return Od}}),Object.defineProperty(i,"LoadBundleTask",{enumerable:!0,get:function(){return cd}}),Object.defineProperty(i,"PersistentCacheIndexManager",{enumerable:!0,get:function(){return zm}}),Object.defineProperty(i,"Query",{enumerable:!0,get:function(){return Yh}}),Object.defineProperty(i,"QueryCompositeFilterConstraint",{enumerable:!0,get:function(){return pf}}),Object.defineProperty(i,"QueryConstraint",{enumerable:!0,get:function(){return df}}),Object.defineProperty(i,"QueryDocumentSnapshot",{enumerable:!0,get:function(){return Qf}}),Object.defineProperty(i,"QueryEndAtConstraint",{enumerable:!0,get:function(){return Df}}),Object.defineProperty(i,"QueryFieldFilterConstraint",{enumerable:!0,get:function(){return mf}}),Object.defineProperty(i,"QueryLimitConstraint",{enumerable:!0,get:function(){return If}}),Object.defineProperty(i,"QueryOrderByConstraint",{enumerable:!0,get:function(){return vf}}),Object.defineProperty(i,"QuerySnapshot",{enumerable:!0,get:function(){return Wf}}),Object.defineProperty(i,"QueryStartAtConstraint",{enumerable:!0,get:function(){return Ef}}),Object.defineProperty(i,"SnapshotMetadata",{enumerable:!0,get:function(){return $f}}),Object.defineProperty(i,"Timestamp",{enumerable:!0,get:function(){return me}}),Object.defineProperty(i,"Transaction",{enumerable:!0,get:function(){return Om}}),Object.defineProperty(i,"VectorValue",{enumerable:!0,get:function(){return Pd}}),Object.defineProperty(i,"WriteBatch",{enumerable:!0,get:function(){return Nm}}),Object.defineProperty(i,"_AutoId",{enumerable:!0,get:function(){return z}}),Object.defineProperty(i,"_ByteString",{enumerable:!0,get:function(){return Tn}}),Object.defineProperty(i,"_DatabaseId",{enumerable:!0,get:function(){return Mn}}),Object.defineProperty(i,"_DocumentKey",{enumerable:!0,get:function(){return te}}),Object.defineProperty(i,"_EmptyAppCheckTokenProvider",{enumerable:!0,get:function(){return U}}),Object.defineProperty(i,"_EmptyAuthCredentialsProvider",{enumerable:!0,get:function(){return P}}),Object.defineProperty(i,"_FieldPath",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(i,"_TestingHooks",{enumerable:!0,get:function(){return Jm}}),Object.defineProperty(i,"_cast",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(i,"_debugAssert",{enumerable:!0,get:function(){return D}}),Object.defineProperty(i,"_internalAggregationQueryToProtoRunAggregationQueryRequest",{enumerable:!0,get:function(){return Ym}}),Object.defineProperty(i,"_internalQueryToProtoQueryTarget",{enumerable:!0,get:function(){return Xm}}),Object.defineProperty(i,"_isBase64Available",{enumerable:!0,get:function(){return _n}}),Object.defineProperty(i,"_logWarn",{enumerable:!0,get:function(){return _}}),Object.defineProperty(i,"_validateIsNotUsedTogether",{enumerable:!0,get:function(){return re}}),Object.defineProperty(i,"addDoc",{enumerable:!0,get:function(){return um}}),Object.defineProperty(i,"aggregateFieldEqual",{enumerable:!0,get:function(){return jf}}),Object.defineProperty(i,"aggregateQuerySnapshotEqual",{enumerable:!0,get:function(){return Bf}}),Object.defineProperty(i,"and",{enumerable:!0,get:function(){return wf}}),Object.defineProperty(i,"arrayRemove",{enumerable:!0,get:function(){return Mm}}),Object.defineProperty(i,"arrayUnion",{enumerable:!0,get:function(){return Vm}}),Object.defineProperty(i,"average",{enumerable:!0,get:function(){return qf}}),Object.defineProperty(i,"clearIndexedDbPersistence",{enumerable:!0,get:function(){return vd}}),Object.defineProperty(i,"collection",{enumerable:!0,get:function(){return ed}}),Object.defineProperty(i,"collectionGroup",{enumerable:!0,get:function(){return td}}),Object.defineProperty(i,"connectFirestoreEmulator",{enumerable:!0,get:function(){return Xh}}),Object.defineProperty(i,"count",{enumerable:!0,get:function(){return Uf}}),Object.defineProperty(i,"deleteAllPersistentCacheIndexes",{enumerable:!0,get:function(){return Qm}}),Object.defineProperty(i,"deleteDoc",{enumerable:!0,get:function(){return am}}),Object.defineProperty(i,"deleteField",{enumerable:!0,get:function(){return Fm}}),Object.defineProperty(i,"disableNetwork",{enumerable:!0,get:function(){return _d}}),Object.defineProperty(i,"disablePersistentCacheIndexAutoCreation",{enumerable:!0,get:function(){return Km}}),Object.defineProperty(i,"doc",{enumerable:!0,get:function(){return nd}}),Object.defineProperty(i,"documentId",{enumerable:!0,get:function(){return Ad}}),Object.defineProperty(i,"documentSnapshotFromJSON",{enumerable:!0,get:function(){return Kf}}),Object.defineProperty(i,"enableIndexedDbPersistence",{enumerable:!0,get:function(){return pd}}),Object.defineProperty(i,"enableMultiTabIndexedDbPersistence",{enumerable:!0,get:function(){return yd}}),Object.defineProperty(i,"enableNetwork",{enumerable:!0,get:function(){return Id}}),Object.defineProperty(i,"enablePersistentCacheIndexAutoCreation",{enumerable:!0,get:function(){return Gm}}),Object.defineProperty(i,"endAt",{enumerable:!0,get:function(){return Nf}}),Object.defineProperty(i,"endBefore",{enumerable:!0,get:function(){return Cf}}),Object.defineProperty(i,"ensureFirestoreConfigured",{enumerable:!0,get:function(){return md}}),Object.defineProperty(i,"executeWrite",{enumerable:!0,get:function(){return dm}}),Object.defineProperty(i,"getAggregateFromServer",{enumerable:!0,get:function(){return gm}}),Object.defineProperty(i,"getCountFromServer",{enumerable:!0,get:function(){return mm}}),Object.defineProperty(i,"getDoc",{enumerable:!0,get:function(){return Jf}}),Object.defineProperty(i,"getDocFromCache",{enumerable:!0,get:function(){return em}}),Object.defineProperty(i,"getDocFromServer",{enumerable:!0,get:function(){return tm}}),Object.defineProperty(i,"getDocs",{enumerable:!0,get:function(){return nm}}),Object.defineProperty(i,"getDocsFromCache",{enumerable:!0,get:function(){return rm}}),Object.defineProperty(i,"getDocsFromServer",{enumerable:!0,get:function(){return sm}}),Object.defineProperty(i,"getFirestore",{enumerable:!0,get:function(){return fd}}),Object.defineProperty(i,"getPersistentCacheIndexManager",{enumerable:!0,get:function(){return $m}}),Object.defineProperty(i,"increment",{enumerable:!0,get:function(){return Lm}}),Object.defineProperty(i,"initializeFirestore",{enumerable:!0,get:function(){return dd}}),Object.defineProperty(i,"limit",{enumerable:!0,get:function(){return _f}}),Object.defineProperty(i,"limitToLast",{enumerable:!0,get:function(){return Tf}}),Object.defineProperty(i,"loadBundle",{enumerable:!0,get:function(){return Ed}}),Object.defineProperty(i,"memoryEagerGarbageCollector",{enumerable:!0,get:function(){return bm}}),Object.defineProperty(i,"memoryLocalCache",{enumerable:!0,get:function(){return _m}}),Object.defineProperty(i,"memoryLruGarbageCollector",{enumerable:!0,get:function(){return Im}}),Object.defineProperty(i,"namedQuery",{enumerable:!0,get:function(){return Sd}}),Object.defineProperty(i,"onSnapshot",{enumerable:!0,get:function(){return cm}}),Object.defineProperty(i,"onSnapshotResume",{enumerable:!0,get:function(){return lm}}),Object.defineProperty(i,"onSnapshotsInSync",{enumerable:!0,get:function(){return hm}}),Object.defineProperty(i,"or",{enumerable:!0,get:function(){return yf}}),Object.defineProperty(i,"orderBy",{enumerable:!0,get:function(){return bf}}),Object.defineProperty(i,"persistentLocalCache",{enumerable:!0,get:function(){return Tm}}),Object.defineProperty(i,"persistentMultipleTabManager",{enumerable:!0,get:function(){return Dm}}),Object.defineProperty(i,"persistentSingleTabManager",{enumerable:!0,get:function(){return xm}}),Object.defineProperty(i,"query",{enumerable:!0,get:function(){return ff}}),Object.defineProperty(i,"queryEqual",{enumerable:!0,get:function(){return sd}}),Object.defineProperty(i,"querySnapshotFromJSON",{enumerable:!0,get:function(){return Hf}}),Object.defineProperty(i,"refEqual",{enumerable:!0,get:function(){return rd}}),Object.defineProperty(i,"runTransaction",{enumerable:!0,get:function(){return Pm}}),Object.defineProperty(i,"serverTimestamp",{enumerable:!0,get:function(){return Rm}}),Object.defineProperty(i,"setDoc",{enumerable:!0,get:function(){return im}}),Object.defineProperty(i,"setIndexConfiguration",{enumerable:!0,get:function(){return jm}}),Object.defineProperty(i,"setLogLevel",{enumerable:!0,get:function(){return v}}),Object.defineProperty(i,"snapshotEqual",{enumerable:!0,get:function(){return Yf}}),Object.defineProperty(i,"startAfter",{enumerable:!0,get:function(){return xf}}),Object.defineProperty(i,"startAt",{enumerable:!0,get:function(){return Sf}}),Object.defineProperty(i,"sum",{enumerable:!0,get:function(){return Lf}}),Object.defineProperty(i,"terminate",{enumerable:!0,get:function(){return Td}}),Object.defineProperty(i,"updateDoc",{enumerable:!0,get:function(){return om}}),Object.defineProperty(i,"vector",{enumerable:!0,get:function(){return qm}}),Object.defineProperty(i,"waitForPendingWrites",{enumerable:!0,get:function(){return bd}}),Object.defineProperty(i,"where",{enumerable:!0,get:function(){return gf}}),Object.defineProperty(i,"writeBatch",{enumerable:!0,get:function(){return Um}});var a=t(o[0]),u=t(o[1]),c=t(o[2]),l=t(o[3]),h=t(o[4]),d=t(o[5]);const f="@firebase/firestore",m="4.8.0";
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class g{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}g.UNAUTHENTICATED=new g(null),g.GOOGLE_CREDENTIALS=new g("google-credentials-uid"),g.FIRST_PARTY=new g("first-party-uid"),g.MOCK_USER=new g("mock-user");
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
let p="11.10.0";
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const y=new c.Logger("@firebase/firestore");function w(){return y.logLevel}function v(e){y.setLogLevel(e)}function b(e,...t){if(y.logLevel<=c.LogLevel.DEBUG){const n=t.map(T);y.debug(`Firestore (${p}): ${e}`,...n)}}function I(e,...t){if(y.logLevel<=c.LogLevel.ERROR){const n=t.map(T);y.error(`Firestore (${p}): ${e}`,...n)}}function _(e,...t){if(y.logLevel<=c.LogLevel.WARN){const n=t.map(T);y.warn(`Firestore (${p}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
return(function(e){return JSON.stringify(e)})(e)}catch(t){return e}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function E(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,S(e,r,n)}function S(e,t,n){let r=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw I(r),new Error(r)}function x(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||S(t,s,r)}function D(e,t){e||E(57014,t)}function C(e,t){return e}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends l.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class k{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class O{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(g.UNAUTHENTICATED))}shutdown(){}}class F{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class R{constructor(e){this.t=e,this.currentUser=g.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){x(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new k;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new k,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new k)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(x("string"==typeof t.accessToken,31837,{l:t}),new O(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return x(null===e||"string"==typeof e,2055,{h:e}),new g(e)}}class V{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=g.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class M{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(g.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,a._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){x(void 0===this.o,3512);const n=e=>{null!=e.error&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,b("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new L(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(x("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class U{getToken(){return Promise.resolve(new L(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function j(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function B(){return new TextEncoder}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class z{static newId(){const e=62*Math.floor(4.129032258064516);let t="";for(;t.length<20;){const n=j(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function $(e,t){return e<t?-1:e>t?1:0}function G(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return $(r,s);{const i=B(),o=Q(i.encode(K(e,n)),i.encode(K(t,n)));return 0!==o?o:$(r,s)}}n+=r>65535?2:1}return $(e.length,t.length)}function K(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Q(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return $(e[n],t[n]);return $(e.length,t.length)}function W(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function H(e){return e+"\0"}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const X="__name__";class Y{constructor(e,t,n){void 0===t?t=0:t>e.length&&E(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&E(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Y.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Y?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Y.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return $(e.length,t.length)}static compareSegments(e,t){const n=Y.isNumericId(e),r=Y.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Y.extractNumericId(e).compare(Y.extractNumericId(t)):G(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return h.Integer.fromString(e.substring(4,e.length-2))}}class J extends Y{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new A(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new J(t)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Y{construct(e,t,n){return new ee(e,t,n)}static isValidIdentifier(e){return Z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===X}static keyField(){return new ee([X])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new A(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new A(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new A(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new A(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(t)}static emptyPath(){return new ee([])}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class te{constructor(e){this.path=e}static fromPath(e){return new te(J.fromString(e))}static fromName(e){return new te(J.fromString(e).popFirst(5))}static empty(){return new te(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new J(e.slice()))}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ne(e,t,n){if(!n)throw new A(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function re(e,t,n,r){if(!0===t&&!0===r)throw new A(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function se(e){if(!te.isDocumentKey(e))throw new A(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ie(e){if(te.isDocumentKey(e))throw new A(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oe(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ae(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=(function(e){return e.constructor?e.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":E(12329,{type:typeof e})}function ue(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new A(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ae(e);throw new A(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ce(e,t){if(t<=0)throw new A(N.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function le(e,t){const n={typeString:e};return t&&(n.value=t),n}function he(e,t){if(!oe(e))throw new A(N.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new A(N.INVALID_ARGUMENT,n);return!0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const de=-62135596800,fe=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*fe);return new me(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new A(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new A(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<de)throw new A(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fe}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(he(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-de;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:le("string",me._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new me(0,0))}static max(){return new ge(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const pe=-1;class ye{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function we(e){return e.fields.find(e=>2===e.kind)}function ve(e){return e.fields.filter(e=>2!==e.kind)}function be(e,t){let n=$(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(n=_e(e.fields[r],t.fields[r]),0!==n)return n;return $(e.fields.length,t.fields.length)}ye.UNKNOWN_ID=-1;class Ie{constructor(e,t){this.fieldPath=e,this.kind=t}}function _e(e,t){const n=ee.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:$(e.kind,t.kind)}class Te{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Te(0,xe.min())}}function Ee(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(1e9===r?new me(n+1,0):new me(n,r));return new xe(s,te.empty(),t)}function Se(e){return new xe(e.readTime,e.key,pe)}class xe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new xe(ge.min(),te.empty(),pe)}static max(){return new xe(ge.max(),te.empty(),pe)}}function De(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=te.comparator(e.documentKey,t.documentKey),0!==n?n:$(e.largestBatchId,t.largestBatchId)
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */)}const Ce="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ne{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Ae(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==Ce)throw e;b("LocalStore","Unexpectedly lost primary lease")}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ke{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ke((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ke?t:ke.resolve(t)}catch(e){return ke.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ke.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ke.reject(t)}static resolve(e){return new ke((t,n)=>{t(e)})}static reject(e){return new ke((t,n)=>{n(e)})}static waitFor(e){return new ke((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=ke.resolve(!1);for(const n of e)t=t.next(e=>e?ke.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ke((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;t(e[u]).next(e=>{i[u]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new ke((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Oe="SimpleDb";class Pe{static open(e,t,n,r){try{return new Pe(t,e.transaction(r,n))}catch(e){throw new Me(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new k,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Me(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=Be(t.target.error);this.S.reject(new Me(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(b(Oe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new qe(t)}}class Fe{static delete(e){return b(Oe,"Removing database:",e),Ue((0,l.getGlobal)().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,l.isIndexedDBAvailable)())return!1;if(Fe.F())return!0;const e=(0,l.getUA)(),t=Fe.M(e),n=0<t&&t<10,r=Re(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.O)}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,12.2===Fe.M((0,l.getUA)())&&I("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(b(Oe,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Me(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new A(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new A(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Me(e,r))},r.onupgradeneeded=e=>{b(Oe,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;if(null!==this.L&&this.L!==e.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${e.oldVersion}, event.newVersion=${e.newVersion}, db.version=${t.version}`);this.B.q(t,r.transaction,e.oldVersion,this.version).next(()=>{b(Oe,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const t=e.target;this.L=t.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var t;null===e.newVersion&&(_('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),null===(t=this.databaseDeletedListener)||void 0===t||t.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=Pe.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next(e=>(t.v(),e)).catch(e=>(t.abort(e),ke.reject(e))).toPromise();return i.catch(()=>{}),await t.D,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(b(Oe,"Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Re(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Ve{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Ue(this.$.delete())}}class Me extends A{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Le(e){return"IndexedDbTransactionError"===e.name}class qe{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(b(Oe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(b(Oe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ue(n)}add(e){return b(Oe,"ADD",this.store.name,e,e),Ue(this.store.add(e))}get(e){return Ue(this.store.get(e)).next(t=>(void 0===t&&(t=null),b(Oe,"GET",this.store.name,e,t),t))}delete(e){return b(Oe,"DELETE",this.store.name,e),Ue(this.store.delete(e))}count(){return b(Oe,"COUNT",this.store.name),Ue(this.store.count())}j(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new ke((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.J(e,(e,n)=>{t.push(n)}).next(()=>t)}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new ke((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){b(Oe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const r=this.cursor(n);return this.J(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.J(r,t)}ee(e){const t=this.cursor({});return new ke((n,r)=>{t.onerror=e=>{const t=Be(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}J(e,t){const n=[];return new ke((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new Ve(s),o=t(s.primaryKey,s.value,i);if(o instanceof ke){const e=o.catch(e=>(i.done(),ke.reject(e)));n.push(e)}i.isDone?r():null===i.W?s.continue():s.continue(i.W)}}).next(()=>ke.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ue(e){return new ke((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Be(e.target.error);n(t)}})}let je=!1;function Be(e){const t=Fe.M((0,l.getUA)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return je||(je=!0,setTimeout(()=>{throw e},0)),e}}return e}const ze="IndexBackfiller";class $e{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ne(e){b(ze,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const e=await this.te.re();b(ze,`Documents written: ${e}`)}catch(e){Le(e)?b(ze,"Ignoring IndexedDB error during index backfill: ",e):await Ae(e)}await this.ne(6e4)})}}class Ge{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const n=new Set;let r=t,s=!0;return ke.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return b(ze,`Processing collection: ${t}`),this.se(e,t,r).next(e=>{r-=e,n.add(t)});s=!1})).next(()=>t-r)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this.oe(r,n)).next(n=>(b(ze,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>s.size)}))}oe(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Se(t);De(r,n)>0&&(n=r)}),new xe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ke{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ke.ue=-1;
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Qe=-1;function We(e){return null==e}function He(e){return 0===e&&1/e==-1/0}function Xe(e){return"number"==typeof e&&Number.isInteger(e)&&!He(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ye="\x01";function Je(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=et(t)),t=Ze(e.get(n),t);return et(t)}function Ze(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case Ye:n+="\x01\x11";break;default:n+=r}}return n}function et(e){return e+Ye+"\x01"}function tt(e){const t=e.length;if(x(t>=2,64408,{path:e}),2===t)return x(e.charAt(0)===Ye&&"\x01"===e.charAt(1),56145,{path:e}),J.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf(Ye,i);switch((t<0||t>n)&&E(50515,{path:e}),e.charAt(t+1)){case"\x01":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"\x10":s+=e.substring(i,t),s+="\0";break;case"\x11":s+=e.substring(i,t+1);break;default:E(61167,{path:e})}i=t+2}return new J(r)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const nt="remoteDocuments",rt="owner",st="owner",it="mutationQueues",ot="mutations",at="batchId",ut="userMutationsIndex",ct=["userId","batchId"];
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function lt(e,t){return[e,Je(t)]}function ht(e,t,n){return[e,Je(t),n]}const dt={},ft="documentMutations",mt="remoteDocumentsV14",gt=["prefixPath","collectionGroup","readTime","documentId"],pt="documentKeyIndex",yt=["prefixPath","collectionGroup","documentId"],wt="collectionGroupIndex",vt=["collectionGroup","readTime","prefixPath","documentId"],bt="remoteDocumentGlobal",It="remoteDocumentGlobalKey",_t="targets",Tt="queryTargetsIndex",Et=["canonicalId","targetId"],St="targetDocuments",xt=["targetId","path"],Dt="documentTargetsIndex",Ct=["path","targetId"],Nt="targetGlobalKey",At="targetGlobal",kt="collectionParents",Ot=["collectionId","parent"],Pt="clientMetadata",Ft="bundles",Rt="namedQueries",Vt="indexConfiguration",Mt="collectionGroupIndex",Lt="indexState",qt=["indexId","uid"],Ut="sequenceNumberIndex",jt=["uid","sequenceNumber"],Bt="indexEntries",zt=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$t="documentKeyIndex",Gt=["indexId","uid","orderedDocumentKey"],Kt="documentOverlays",Qt=["userId","collectionPath","documentId"],Wt="collectionPathOverlayIndex",Ht=["userId","collectionPath","largestBatchId"],Xt="collectionGroupOverlayIndex",Yt=["userId","collectionGroup","largestBatchId"],Jt="globals",Zt=[it,ot,ft,nt,_t,rt,At,St,Pt,bt,kt,Ft,Rt],en=[...Zt,Kt],tn=[it,ot,ft,mt,_t,rt,At,St,Pt,bt,kt,Ft,Rt,Kt],nn=tn,rn=[...nn,Vt,Lt,Bt],sn=rn,on=[...rn,Jt],an=on;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class un extends Ne{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function cn(e,t){const n=C(e);return Fe.N(n.ce,t)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ln(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function hn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function dn(e,t){const n=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}function fn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mn{constructor(e,t){this.comparator=e,this.root=t||pn.EMPTY}insert(e,t){return new mn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(e){return new mn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gn(this.root,e,this.comparator,!1)}getReverseIterator(){return new gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gn(this.root,e,this.comparator,!0)}}class gn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pn{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:pn.RED,this.left=null!=r?r:pn.EMPTY,this.right=null!=s?s:pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new pn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return pn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw E(27949);return e+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1,pn.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class yn{constructor(e){this.comparator=e,this.data=new mn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wn(this.data.getIterator())}getIteratorFrom(e){return new wn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof yn))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yn(this.comparator);return t.data=e,t}}class wn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vn(e){return e.hasNext()?e.getNext():void 0}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bn{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new bn([])}unionWith(e){let t=new yn(ee.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return W(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class In extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function _n(){return"undefined"!=typeof atob}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Tn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new In("Invalid base64 string: "+e):e}})(e);return new Tn(t)}static fromUint8Array(e){const t=(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t})(e);return new Tn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tn.EMPTY_BYTE_STRING=new Tn("");const En=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(e){if(x(!!e,39018),"string"==typeof e){let t=0;const n=En.exec(e);if(x(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xn(e.seconds),nanos:xn(e.nanos)}}function xn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Dn(e){return"string"==typeof e?Tn.fromBase64String(e):Tn.fromUint8Array(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Cn="server_timestamp",Nn="__type__",An="__previous_value__",kn="__local_write_time__";function On(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Nn])||void 0===n?void 0:n.stringValue)===Cn}function Pn(e){const t=e.mapValue.fields[An];return On(t)?Pn(t):t}function Fn(e){const t=Sn(e.mapValue.fields[kn].timestampValue);return new me(t.seconds,t.nanos)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Rn{constructor(e,t,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u,this.isUsingEmulator=c}}const Vn="(default)";class Mn{constructor(e,t){this.projectId=e,this.database=t||Vn}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database===Vn}isEqual(e){return e instanceof Mn&&e.projectId===this.projectId&&e.database===this.database}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ln="__type__",qn="__max__",Un={mapValue:{fields:{__type__:{stringValue:qn}}}},jn="__vector__",Bn="value",zn={nullValue:"NULL_VALUE"};function $n(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?On(e)?4:ar(e)?9007199254740991:ir(e)?10:11:E(28295,{value:e})}function Gn(e,t){if(e===t)return!0;const n=$n(e);if(n!==$n(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fn(e).isEqual(Fn(t));case 3:return(function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Sn(e.timestampValue),r=Sn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(e,t){return Dn(e.bytesValue).isEqual(Dn(t.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(e,t){return xn(e.geoPointValue.latitude)===xn(t.geoPointValue.latitude)&&xn(e.geoPointValue.longitude)===xn(t.geoPointValue.longitude)})(e,t);case 2:return(function(e,t){if("integerValue"in e&&"integerValue"in t)return xn(e.integerValue)===xn(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=xn(e.doubleValue),r=xn(t.doubleValue);return n===r?He(n)===He(r):isNaN(n)&&isNaN(r)}return!1})(e,t);case 9:return W(e.arrayValue.values||[],t.arrayValue.values||[],Gn);case 10:case 11:return(function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ln(n)!==ln(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Gn(n[e],r[e])))return!1;return!0})(e,t);default:return E(52216,{left:e})}}function Kn(e,t){return void 0!==(e.values||[]).find(e=>Gn(e,t))}function Qn(e,t){if(e===t)return 0;const n=$n(e),r=$n(t);if(n!==r)return $(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $(e.booleanValue,t.booleanValue);case 2:return(function(e,t){const n=xn(e.integerValue||e.doubleValue),r=xn(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1})(e,t);case 3:return Wn(e.timestampValue,t.timestampValue);case 4:return Wn(Fn(e),Fn(t));case 5:return G(e.stringValue,t.stringValue);case 6:return(function(e,t){const n=Dn(e),r=Dn(t);return n.compareTo(r)})(e.bytesValue,t.bytesValue);case 7:return(function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=$(n[e],r[e]);if(0!==t)return t}return $(n.length,r.length)})(e.referenceValue,t.referenceValue);case 8:return(function(e,t){const n=$(xn(e.latitude),xn(t.latitude));return 0!==n?n:$(xn(e.longitude),xn(t.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Hn(e.arrayValue,t.arrayValue);case 10:return(function(e,t){var n,r,s,i;const o=e.fields||{},a=t.fields||{},u=null===(n=o[Bn])||void 0===n?void 0:n.arrayValue,c=null===(r=a[Bn])||void 0===r?void 0:r.arrayValue,l=$((null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==l?l:Hn(u,c)})(e.mapValue,t.mapValue);case 11:return(function(e,t){if(e===Un.mapValue&&t===Un.mapValue)return 0;if(e===Un.mapValue)return 1;if(t===Un.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=G(r[e],i[e]);if(0!==t)return t;const o=Qn(n[r[e]],s[i[e]]);if(0!==o)return o}return $(r.length,i.length)})(e.mapValue,t.mapValue);default:throw E(23264,{le:n})}}function Wn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return $(e,t);const n=Sn(e),r=Sn(t),s=$(n.seconds,r.seconds);return 0!==s?s:$(n.nanos,r.nanos)}function Hn(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Qn(n[e],r[e]);if(t)return t}return $(n.length,r.length)}function Xn(e){return Yn(e)}function Yn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(e){const t=Sn(e);return`time(${t.seconds},${t.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(e){return Dn(e).toBase64()})(e.bytesValue):"referenceValue"in e?(function(e){return te.fromName(e).toString()})(e.referenceValue):"geoPointValue"in e?(function(e){return`geo(${e.latitude},${e.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Yn(r);return t+"]"})(e.arrayValue):"mapValue"in e?(function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Yn(e.fields[s])}`;return n+"}"})(e.mapValue):E(61005,{value:e})}function Jn(e){switch($n(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Pn(e);return t?16+Jn(t):16;case 5:return 2*e.stringValue.length;case 6:return Dn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(e){return(e.values||[]).reduce((e,t)=>e+Jn(t),0)})(e.arrayValue);case 10:case 11:return(function(e){let t=0;return hn(e.fields,(e,n)=>{t+=e.length+Jn(n)}),t})(e.mapValue);default:throw E(13486,{value:e})}}function Zn(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function er(e){return!!e&&"integerValue"in e}function tr(e){return!!e&&"arrayValue"in e}function nr(e){return!!e&&"nullValue"in e}function rr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sr(e){return!!e&&"mapValue"in e}function ir(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Ln])||void 0===n?void 0:n.stringValue)===jn}function or(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return hn(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=or(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=or(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ar(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===qn}const ur={mapValue:{fields:{[Ln]:{stringValue:jn},[Bn]:{arrayValue:{}}}}};function cr(e){return"nullValue"in e?zn:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Zn(Mn.empty(),te.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?ir(e)?ur:{mapValue:{}}:E(35942,{value:e})}function lr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Zn(Mn.empty(),te.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?ur:"mapValue"in e?ir(e)?{mapValue:{}}:Un:E(61959,{value:e})}function hr(e,t){const n=Qn(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function dr(e,t){const n=Qn(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class fr{constructor(e){this.value=e}static empty(){return new fr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!sr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=ee.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=or(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];sr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){hn(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new fr(or(this.value))}}function mr(e){const t=[];return hn(e.fields,(e,n)=>{const r=new ee([e]);if(sr(n)){const e=mr(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new bn(t)
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class gr{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new gr(e,0,ge.min(),ge.min(),ge.min(),fr.empty(),0)}static newFoundDocument(e,t,n,r){return new gr(e,1,t,ge.min(),n,r,0)}static newNoDocument(e,t){return new gr(e,2,t,ge.min(),ge.min(),fr.empty(),0)}static newUnknownDocument(e,t){return new gr(e,3,t,ge.min(),ge.min(),fr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof gr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pr{constructor(e,t){this.position=e,this.inclusive=t}}function yr(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?te.comparator(te.fromName(o.referenceValue),n.key):Qn(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function wr(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Gn(e.position[n],t.position[n]))return!1;return!0}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function br(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ir{}class _r extends Ir{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Or(e,t,n):"array-contains"===t?new Vr(e,n):"in"===t?new Mr(e,n):"not-in"===t?new Lr(e,n):"array-contains-any"===t?new qr(e,n):new _r(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Pr(e,n):new Fr(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Qn(t,this.value)):null!==t&&$n(this.value)===$n(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tr extends Ir{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Tr(e,t)}matches(e){return Er(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Er(e){return"and"===e.op}function Sr(e){return"or"===e.op}function xr(e){return Dr(e)&&Er(e)}function Dr(e){for(const t of e.filters)if(t instanceof Tr)return!1;return!0}function Cr(e){if(e instanceof _r)return e.field.canonicalString()+e.op.toString()+Xn(e.value);if(xr(e))return e.filters.map(e=>Cr(e)).join(",");{const t=e.filters.map(e=>Cr(e)).join(",");return`${e.op}(${t})`}}function Nr(e,t){return e instanceof _r?(function(e,t){return t instanceof _r&&e.op===t.op&&e.field.isEqual(t.field)&&Gn(e.value,t.value)})(e,t):e instanceof Tr?(function(e,t){return t instanceof Tr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Nr(n,t.filters[r]),!0)})(e,t):void E(19439)}function Ar(e,t){const n=e.filters.concat(t);return Tr.create(n,e.op)}function kr(e){return e instanceof _r?(function(e){return`${e.field.canonicalString()} ${e.op} ${Xn(e.value)}`})(e):e instanceof Tr?(function(e){return e.op.toString()+" {"+e.getFilters().map(kr).join(" ,")+"}"})(e):"Filter"}class Or extends _r{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class Pr extends _r{constructor(e,t){super(e,"in",t),this.keys=Rr("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fr extends _r{constructor(e,t){super(e,"not-in",t),this.keys=Rr("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rr(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>te.fromName(e.referenceValue))}class Vr extends _r{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tr(t)&&Kn(t.arrayValue,this.value)}}class Mr extends _r{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Kn(this.value.arrayValue,t)}}class Lr extends _r{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Kn(this.value.arrayValue,t)}}class qr extends _r{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Kn(this.value.arrayValue,e))}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ur{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Pe=null}}function jr(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ur(e,t,n,r,s,i,o)}function Br(e){const t=C(e);if(null===t.Pe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Cr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>(function(e){return e.field.canonicalString()+e.dir})(e)).join(","),We(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Xn(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Xn(e)).join(",")),t.Pe=e}return t.Pe}function zr(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!br(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Nr(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wr(e.startAt,t.startAt)&&wr(e.endAt,t.endAt)}function $r(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Gr(e,t){return e.filters.filter(e=>e instanceof _r&&e.field.isEqual(t))}function Kr(e,t,n){let r=zn,s=!0;for(const n of Gr(e,t)){let e=zn,t=!0;switch(n.op){case"<":case"<=":e=cr(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=zn}hr({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];hr({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Qr(e,t,n){let r=Un,s=!0;for(const n of Gr(e,t)){let e=Un,t=!0;switch(n.op){case">=":case">":e=lr(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Un}dr({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];dr({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Wr{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Hr(e,t,n,r,s,i,o,a){return new Wr(e,t,n,r,s,i,o,a)}function Xr(e){return new Wr(e)}function Yr(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Jr(e){return null!==e.collectionGroup}function Zr(e){const t=C(e);if(null===t.Te){t.Te=[];const e=new Set;for(const n of t.explicitOrderBy)t.Te.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=(function(e){let t=new yn(ee.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new vr(r,n))}),e.has(ee.keyField().canonicalString())||t.Te.push(new vr(ee.keyField(),n))}return t.Te}function es(e){const t=C(e);return t.Ie||(t.Ie=ns(t,Zr(e))),t.Ie}function ts(e){const t=C(e);return t.de||(t.de=ns(t,e.explicitOrderBy)),t.de}function ns(e,t){if("F"===e.limitType)return jr(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new vr(e.field,t)});const n=e.endAt?new pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new pr(e.startAt.position,e.startAt.inclusive):null;return jr(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function rs(e,t){const n=e.filters.concat([t]);return new Wr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ss(e,t,n){return new Wr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function is(e,t){return zr(es(e),es(t))&&e.limitType===t.limitType}function os(e){return`${Br(es(e))}|lt:${e.limitType}`}function as(e){return`Query(target=${(function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>kr(e)).join(", ")}]`),We(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>(function(e){return`${e.field.canonicalString()} (${e.dir})`})(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Xn(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Xn(e)).join(",")),`Target(${t})`})(es(e))}; limitType=${e.limitType})`}function us(e,t){return t.isFoundDocument()&&(function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):te.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)})(e,t)&&(function(e,t){for(const n of Zr(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0})(e,t)&&(function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0})(e,t)&&(function(e,t){return!(e.startAt&&!(function(e,t,n){const r=yr(e,t,n);return e.inclusive?r<=0:r<0})(e.startAt,Zr(e),t))&&!(e.endAt&&!(function(e,t,n){const r=yr(e,t,n);return e.inclusive?r>=0:r>0})(e.endAt,Zr(e),t))})(e,t)}function cs(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ls(e){return(t,n)=>{let r=!1;for(const s of Zr(e)){const e=hs(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function hs(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):(function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Qn(r,s):E(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return E(19790,{direction:e.dir})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return fn(this.inner)}size(){return this.innerSize}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const fs=new mn(te.comparator);function ms(){return fs}const gs=new mn(te.comparator);function ps(...e){let t=gs;for(const n of e)t=t.insert(n.key,n);return t}function ys(e){let t=gs;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ws(){return bs()}function vs(){return bs()}function bs(){return new ds(e=>e.toString(),(e,t)=>e.isEqual(t))}const Is=new mn(te.comparator),_s=new yn(te.comparator);function Ts(...e){let t=_s;for(const n of e)t=t.add(n);return t}const Es=new yn($);function Ss(){return Es}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function xs(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:He(t)?"-0":t}}function Ds(e){return{integerValue:""+e}}function Cs(e,t){return Xe(t)?Ds(t):xs(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ns{constructor(){this._=void 0}}function As(e,t,n){return e instanceof Ps?(function(e,t){const n={fields:{[Nn]:{stringValue:Cn},[kn]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&On(t)&&(t=Pn(t)),t&&(n.fields[An]=t),{mapValue:n}})(n,t):e instanceof Fs?Rs(e,t):e instanceof Vs?Ms(e,t):(function(e,t){const n=Os(e,t),r=qs(n)+qs(e.Ee);return er(n)&&er(e.Ee)?Ds(r):xs(e.serializer,r)})(e,t)}function ks(e,t,n){return e instanceof Fs?Rs(e,t):e instanceof Vs?Ms(e,t):n}function Os(e,t){return e instanceof Ls?(function(e){return er(e)||(function(e){return!!e&&"doubleValue"in e})(e)})(t)?t:{integerValue:0}:null}class Ps extends Ns{}class Fs extends Ns{constructor(e){super(),this.elements=e}}function Rs(e,t){const n=Us(t);for(const t of e.elements)n.some(e=>Gn(e,t))||n.push(t);return{arrayValue:{values:n}}}class Vs extends Ns{constructor(e){super(),this.elements=e}}function Ms(e,t){let n=Us(t);for(const t of e.elements)n=n.filter(e=>!Gn(e,t));return{arrayValue:{values:n}}}class Ls extends Ns{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qs(e){return xn(e.integerValue||e.doubleValue)}function Us(e){return tr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class js{constructor(e,t){this.field=e,this.transform=t}}function Bs(e,t){return e.field.isEqual(t.field)&&(function(e,t){return e instanceof Fs&&t instanceof Fs||e instanceof Vs&&t instanceof Vs?W(e.elements,t.elements,Gn):e instanceof Ls&&t instanceof Ls?Gn(e.Ee,t.Ee):e instanceof Ps&&t instanceof Ps})(e.transform,t.transform)}class zs{constructor(e,t){this.version=e,this.transformResults=t}}class $s{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ks{}function Qs(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ri(e.key,$s.none()):new Js(e.key,e.data,$s.none());{const n=e.data,r=fr.empty();let s=new yn(ee.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Zs(e.key,r,new bn(s.toArray()),$s.none())}}function Ws(e,t,n){e instanceof Js?(function(e,t,n){const r=e.value.clone(),s=ti(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()})(e,t,n):e instanceof Zs?(function(e,t,n){if(!Gs(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ti(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(ei(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()})(e,t,n):(function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()})(0,t,n)}function Hs(e,t,n,r){return e instanceof Js?(function(e,t,n,r){if(!Gs(e.precondition,t))return n;const s=e.value.clone(),i=ni(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null})(e,t,n,r):e instanceof Zs?(function(e,t,n,r){if(!Gs(e.precondition,t))return n;const s=ni(e.fieldTransforms,r,t),i=t.data;return i.setAll(ei(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))})(e,t,n,r):(function(e,t,n){return Gs(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n})(e,t,n)}function Xs(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Os(r.transform,e||null);null!=s&&(null===n&&(n=fr.empty()),n.set(r.field,s))}return n||null}function Ys(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&W(e,t,(e,t)=>Bs(e,t))})(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Js extends Ks{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zs extends Ks{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ei(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ti(e,t,n){const r=new Map;x(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,ks(o,a,n[s]))}return r}function ni(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,As(e,i,t))}return r}class ri extends Ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class si extends Ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ii{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Ws(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Hs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Hs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=vs();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Qs(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ge.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ts())}isEqual(e){return this.batchId===e.batchId&&W(this.mutations,e.mutations,(e,t)=>Ys(e,t))&&W(this.baseMutations,e.baseMutations,(e,t)=>Ys(e,t))}}class oi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){x(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let r=Is;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new oi(e,t,n,r)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ai{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ui{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ci{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var li,hi;function di(e){switch(e){case N.OK:return E(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return E(15467,{code:e})}}function fi(e){if(void 0===e)return I("GRPC error has no .code"),N.UNKNOWN;switch(e){case li.OK:return N.OK;case li.CANCELLED:return N.CANCELLED;case li.UNKNOWN:return N.UNKNOWN;case li.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case li.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case li.INTERNAL:return N.INTERNAL;case li.UNAVAILABLE:return N.UNAVAILABLE;case li.UNAUTHENTICATED:return N.UNAUTHENTICATED;case li.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case li.NOT_FOUND:return N.NOT_FOUND;case li.ALREADY_EXISTS:return N.ALREADY_EXISTS;case li.PERMISSION_DENIED:return N.PERMISSION_DENIED;case li.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case li.ABORTED:return N.ABORTED;case li.OUT_OF_RANGE:return N.OUT_OF_RANGE;case li.UNIMPLEMENTED:return N.UNIMPLEMENTED;case li.DATA_LOSS:return N.DATA_LOSS;default:return E(39323,{code:e})}}(hi=li||(li={}))[hi.OK=0]="OK",hi[hi.CANCELLED=1]="CANCELLED",hi[hi.UNKNOWN=2]="UNKNOWN",hi[hi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",hi[hi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",hi[hi.NOT_FOUND=5]="NOT_FOUND",hi[hi.ALREADY_EXISTS=6]="ALREADY_EXISTS",hi[hi.PERMISSION_DENIED=7]="PERMISSION_DENIED",hi[hi.UNAUTHENTICATED=16]="UNAUTHENTICATED",hi[hi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",hi[hi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",hi[hi.ABORTED=10]="ABORTED",hi[hi.OUT_OF_RANGE=11]="OUT_OF_RANGE",hi[hi.UNIMPLEMENTED=12]="UNIMPLEMENTED",hi[hi.INTERNAL=13]="INTERNAL",hi[hi.UNAVAILABLE=14]="UNAVAILABLE",hi[hi.DATA_LOSS=15]="DATA_LOSS";
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
let mi=null;
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const gi=new h.Integer([4294967295,4294967295],0);function pi(e){const t=B().encode(e),n=new h.Md5;return n.update(t),new Uint8Array(n.digest())}function yi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new h.Integer([n,r],0),new h.Integer([s,i],0)]}class wi{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new vi(`Invalid padding: ${t}`);if(n<0)throw new vi(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new vi(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new vi(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=h.Integer.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(h.Integer.fromNumber(n)));return 1===r.compare(gi)&&(r=new h.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;const t=pi(e),[n,r]=yi(t);for(let e=0;e<this.hashCount;e++){const t=this.pe(n,r,e);if(!this.ye(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new wi(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.fe)return;const t=pi(e),[n,r]=yi(t);for(let e=0;e<this.hashCount;e++){const t=this.pe(n,r,e);this.we(t)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bi{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bi(ge.min(),r,new mn($),ms(),Ts())}}class Ii{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ii(n,t,Ts(),Ts(),Ts())}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class _i{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class Ti{constructor(e,t){this.targetId=e,this.De=t}}class Ei{constructor(e,t,n=Tn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Si{constructor(){this.ve=0,this.Ce=Ci(),this.Fe=Tn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ts(),t=Ts(),n=Ts();return this.Ce.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:E(38017,{changeType:s})}}),new Ii(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Ci()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,x(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xi{constructor(e){this.We=e,this.Ge=new Map,this.ze=ms(),this.je=Di(),this.Je=Di(),this.He=new mn($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:E(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.De.count,r=this.st(t);if(r){const s=r.target;if($r(s))if(0===n){const e=new te(s.path);this.Xe(t,e,gr.newNoDocument(e,ge.min()))}else x(1===n,20013,{expectedCount:n});else{const r=this.ot(t);if(r!==n){const n=this._t(e),s=n?this.ut(n,e,r):1;if(0!==s){this.rt(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,e)}null==mi||mi.ct((function(e,t,n,r,s){var i,o,a,u,c,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(u=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
            * @license
            * Copyright 2017 Google LLC
            *
            * Licensed under the Apache License, Version 2.0 (the "License");
            * you may not use this file except in compliance with the License.
            * You may obtain a copy of the License at
            *
            *   http://www.apache.org/licenses/LICENSE-2.0
            *
            * Unless required by applicable law or agreed to in writing, software
            * distributed under the License is distributed on an "AS IS" BASIS,
            * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            * See the License for the specific language governing permissions and
            * limitations under the License.
            */)(r,e.De,this.We.lt(),n,s))}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=Dn(n).toUint8Array()}catch(e){if(e instanceof In)return _("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new wi(i,r,s)}catch(e){return _(e instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.fe?null:o}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.We.lt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Xe(t,n,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((n,r)=>{const s=this.st(r);if(s){if(n.current&&$r(s.target)){const t=new te(s.target.path);this.Tt(t).has(r)||this.It(r,t)||this.Xe(r,t,gr.newNoDocument(t,e))}n.Ne&&(t.set(r,n.Le()),n.ke())}});let n=Ts();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ze.forEach((t,n)=>n.setReadTime(e));const r=new bi(e,t,this.He,this.ze,n);return this.ze=ms(),this.je=Di(),this.Je=Di(),this.He=new mn($),r}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Si,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yn($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yn($),this.je=this.je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||b("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Si),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Di(){return new mn(te.comparator)}function Ci(){return new mn(te.comparator)}const Ni={asc:"ASCENDING",desc:"DESCENDING"},Ai={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ki={and:"AND",or:"OR"};class Oi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pi(e,t){return e.useProto3Json||We(t)?t:{value:t}}function Fi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ri(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Vi(e,t){return Fi(e,t.toTimestamp())}function Mi(e){return x(!!e,49232),ge.fromTimestamp((function(e){const t=Sn(e);return new me(t.seconds,t.nanos)})(e))}function Li(e,t){return qi(e,t).canonicalString()}function qi(e,t){const n=(function(e){return new J(["projects",e.projectId,"databases",e.database])})(e).child("documents");return void 0===t?n:n.child(t)}function Ui(e){const t=J.fromString(e);return x(mo(t),10190,{key:t.toString()}),t}function ji(e,t){return Li(e.databaseId,t.path)}function Bi(e,t){const n=Ui(t);if(n.get(1)!==e.databaseId.projectId)throw new A(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new A(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(Ki(n))}function zi(e,t){return Li(e.databaseId,t)}function $i(e){const t=Ui(e);return 4===t.length?J.emptyPath():Ki(t)}function Gi(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ki(e){return x(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Qi(e,t,n){return{name:ji(e,t),fields:n.value.mapValue.fields}}function Wi(e,t,n){const r=Bi(e,t.name),s=Mi(t.updateTime),i=t.createTime?Mi(t.createTime):ge.min(),o=new fr({mapValue:{fields:t.fields}}),a=gr.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Hi(e,t){return"found"in t?(function(e,t){x(!!t.found,43571),t.found.name,t.found.updateTime;const n=Bi(e,t.found.name),r=Mi(t.found.updateTime),s=t.found.createTime?Mi(t.found.createTime):ge.min(),i=new fr({mapValue:{fields:t.found.fields}});return gr.newFoundDocument(n,r,s,i)})(e,t):"missing"in t?(function(e,t){x(!!t.missing,3894),x(!!t.readTime,22933);const n=Bi(e,t.missing),r=Mi(t.readTime);return gr.newNoDocument(n,r)})(e,t):E(7234,{result:t})}function Xi(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:E(39313,{state:e})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(e,t){return e.useProto3Json?(x(void 0===t||"string"==typeof t,58123),Tn.fromBase64String(t||"")):(x(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Tn.fromUint8Array(t||new Uint8Array))})(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(e){const t=void 0===e.code?N.UNKNOWN:fi(e.code);return new A(t,e.message||"")})(o);n=new Ei(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bi(e,r.document.name),i=Mi(r.document.updateTime),o=r.document.createTime?Mi(r.document.createTime):ge.min(),a=new fr({mapValue:{fields:r.document.fields}}),u=gr.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new _i(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Bi(e,r.document),i=r.readTime?Mi(r.readTime):ge.min(),o=gr.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _i([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Bi(e,r.document),i=r.removedTargetIds||[];n=new _i([],i,s,null)}else{if(!("filter"in t))return E(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new ci(r,s),o=e.targetId;n=new Ti(o,i)}}return n}function Yi(e,t){let n;if(t instanceof Js)n={update:Qi(e,t.key,t.value)};else if(t instanceof ri)n={delete:ji(e,t.key)};else if(t instanceof Zs)n={update:Qi(e,t.key,t.data),updateMask:fo(t.fieldMask)};else{if(!(t instanceof si))return E(16599,{Rt:t.type});n={verify:ji(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){const n=t.transform;if(n instanceof Ps)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Vs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ls)return{fieldPath:t.field.canonicalString(),increment:n.Ee};throw E(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(n.currentDocument=(function(e,t){return void 0!==t.updateTime?{updateTime:Vi(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:E(27497)})(e,t.precondition)),n}function Ji(e,t){const n=t.currentDocument?(function(e){return void 0!==e.updateTime?$s.updateTime(Mi(e.updateTime)):void 0!==e.exists?$s.exists(e.exists):$s.none()})(t.currentDocument):$s.none(),r=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)x("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new Ps;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Fs(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Vs(e)}else"increment"in t?n=new Ls(e,t.increment):E(16584,{proto:t});const r=ee.fromServerFormat(t.fieldPath);return new js(r,n)})(e,t)):[];if(t.update){t.update.name;const s=Bi(e,t.update.name),i=new fr({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=(function(e){const t=e.fieldPaths||[];return new bn(t.map(e=>ee.fromServerFormat(e)))})(t.updateMask);return new Zs(s,i,e,n,r)}return new Js(s,i,n,r)}if(t.delete){const r=Bi(e,t.delete);return new ri(r,n)}if(t.verify){const r=Bi(e,t.verify);return new si(r,n)}return E(1463,{proto:t})}function Zi(e,t){return e&&e.length>0?(x(void 0!==t,14353),e.map(e=>(function(e,t){let n=e.updateTime?Mi(e.updateTime):Mi(t);return n.isEqual(ge.min())&&(n=Mi(t)),new zs(n,e.transformResults||[])})(e,t))):[]}function eo(e,t){return{documents:[zi(e,t.path)]}}function to(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zi(e,s);const i=(function(e){if(0!==e.length)return ho(Tr.create(e,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const o=(function(e){if(0!==e.length)return e.map(e=>(function(e){return{field:co(e.field),direction:oo(e.dir)}})(e))})(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Pi(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=(function(e){return{before:e.inclusive,values:e.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(e){return{before:!e.inclusive,values:e.position}})(t.endAt)),{Vt:n,parent:s}}function no(e,t,n,r){const{Vt:s,parent:i}=to(e,t),o={},a=[];let u=0;return n.forEach(e=>{const t=r?e.alias:"aggregate_"+u++;o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:co(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:co(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ft:o,parent:i}}function ro(e){let t=$i(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){x(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=(function(e){const t=io(e);return t instanceof Tr&&xr(t)?t.getFilters():[t]})(n.where));let o=[];n.orderBy&&(o=(function(e){return e.map(e=>(function(e){return new vr(lo(e.field),(function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(e.direction))})(e))})(n.orderBy));let a=null;n.limit&&(a=(function(e){let t;return t="object"==typeof e?e.value:e,We(t)?null:t})(n.limit));let u=null;n.startAt&&(u=(function(e){const t=!!e.before,n=e.values||[];return new pr(n,t)})(n.startAt));let c=null;return n.endAt&&(c=(function(e){const t=!e.before,n=e.values||[];return new pr(n,t)})(n.endAt)),Hr(t,s,o,i,a,"F",u,c)}function so(e,t){const n=(function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E(28987,{purpose:e})}})(t.purpose);return null==n?null:{"goog-listen-tags":n}}function io(e){return void 0!==e.unaryFilter?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=lo(e.unaryFilter.field);return _r.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=lo(e.unaryFilter.field);return _r.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=lo(e.unaryFilter.field);return _r.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=lo(e.unaryFilter.field);return _r.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return E(61313);default:return E(60726)}})(e):void 0!==e.fieldFilter?(function(e){return _r.create(lo(e.fieldFilter.field),(function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return E(58110);default:return E(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(e):void 0!==e.compositeFilter?(function(e){return Tr.create(e.compositeFilter.filters.map(e=>io(e)),(function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return E(1026)}})(e.compositeFilter.op))})(e):E(30097,{filter:e})}function oo(e){return Ni[e]}function ao(e){return Ai[e]}function uo(e){return ki[e]}function co(e){return{fieldPath:e.canonicalString()}}function lo(e){return ee.fromServerFormat(e.fieldPath)}function ho(e){return e instanceof _r?(function(e){if("=="===e.op){if(rr(e.value))return{unaryFilter:{field:co(e.field),op:"IS_NAN"}};if(nr(e.value))return{unaryFilter:{field:co(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rr(e.value))return{unaryFilter:{field:co(e.field),op:"IS_NOT_NAN"}};if(nr(e.value))return{unaryFilter:{field:co(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(e.field),op:ao(e.op),value:e.value}}})(e):e instanceof Tr?(function(e){const t=e.getFilters().map(e=>ho(e));return 1===t.length?t[0]:{compositeFilter:{op:uo(e.op),filters:t}}})(e):E(54877,{filter:e})}function fo(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function mo(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class go{constructor(e,t,n,r,s=ge.min(),i=ge.min(),o=Tn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new go(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new go(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new go(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new go(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class po{constructor(e){this.gt=e}}function yo(e,t){let n;if(t.document)n=Wi(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=te.fromSegments(t.noDocument.path),r=Io(t.noDocument.readTime);n=gr.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return E(56709);{const e=te.fromSegments(t.unknownDocument.path),r=Io(t.unknownDocument.version);n=gr.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime((function(e){const t=new me(e[0],e[1]);return ge.fromTimestamp(t)})(t.readTime)),n}function wo(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:vo(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=(function(e,t){return{name:ji(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Fi(e,t.version.toTimestamp()),createTime:Fi(e,t.createTime.toTimestamp())}})(e.gt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:bo(t.version)};else{if(!t.isUnknownDocument())return E(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:bo(t.version)}}return r}function vo(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function bo(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Io(e){const t=new me(e.seconds,e.nanoseconds);return ge.fromTimestamp(t)}function _o(e,t){const n=(t.baseMutations||[]).map(t=>Ji(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>Ji(e.gt,t)),s=me.fromMillis(t.localWriteTimeMs);return new ii(t.batchId,s,n,r)}function To(e){const t=Io(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Io(e.lastLimboFreeSnapshotVersion):ge.min();let r;return r=(function(e){return void 0!==e.documents})(e.query)?(function(e){const t=e.documents.length;return x(1===t,1966,{count:t}),es(Xr($i(e.documents[0])))})(e.query):(function(e){return es(ro(e))})(e.query),new go(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Tn.fromBase64String(e.resumeToken))}function Eo(e,t){const n=bo(t.snapshotVersion),r=bo(t.lastLimboFreeSnapshotVersion);let s;s=$r(t.target)?eo(e.gt,t.target):to(e.gt,t.target).Vt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Br(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function So(e){const t=ro({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ss(t,t.limit,"L"):t}function xo(e,t){return new ai(t.largestBatchId,Ji(e.gt,t.overlayMutation))}function Do(e,t){const n=t.path.lastSegment();return[e,Je(t.path.popLast()),n]}function Co(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:bo(r.readTime),documentKey:Je(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class No{getBundleMetadata(e,t){return Ao(e).get(t).next(e=>{if(e)return(function(e){return{id:e.bundleId,createTime:Io(e.createTime),version:e.version}})(e)})}saveBundleMetadata(e,t){return Ao(e).put((function(e){return{bundleId:e.id,createTime:bo(Mi(e.createTime)),version:e.version}})(t))}getNamedQuery(e,t){return ko(e).get(t).next(e=>{if(e)return(function(e){return{name:e.name,query:So(e.bundledQuery),readTime:Io(e.readTime)}})(e)})}saveNamedQuery(e,t){return ko(e).put((function(e){return{name:e.name,readTime:bo(Mi(e.readTime)),bundledQuery:e.bundledQuery}})(t))}}function Ao(e){return cn(e,Ft)}function ko(e){return cn(e,Rt)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Oo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Oo(e,n)}getOverlay(e,t){return Po(e).get(Do(this.userId,t)).next(e=>e?xo(this.serializer,e):null)}getOverlays(e,t){const n=ws();return ke.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,s)=>{const i=new ai(t,s);r.push(this.wt(e,i))}),ke.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(Je(e.getCollectionPath())));const s=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Po(e).Y(Wt,r))}),ke.waitFor(s)}getOverlaysForCollection(e,t,n){const r=ws(),s=Je(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Po(e).j(Wt,i).next(e=>{for(const t of e){const e=xo(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const s=ws();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Po(e).X({index:Xt,range:o},(e,t,n)=>{const o=xo(this.serializer,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}wt(e,t){return Po(e).put((function(e,t,n){const[r,s,i]=Do(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Yi(e.gt,n.mutation)}})(this.serializer,this.userId,t))}}function Po(e){return cn(e,Kt)}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Fo{St(e){return cn(e,Jt)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{const t=null==e?void 0:e.value;return t?Tn.fromUint8Array(t):Tn.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ro{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(xn(e.integerValue));else if("doubleValue"in e){const n=xn(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),He(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=Sn(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Dn(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?ar(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):ir(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):E(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const e of Object.keys(n))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){var n,r;const s=e.fields||{};this.Ct(t,53);const i=Bn,o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Ct(t,15),t.Ft(xn(o)),this.xt(i,t),this.Dt(s[i],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const e of n)this.Dt(e,t)}Bt(e,t){this.Ct(t,37),te.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Ro.Ut=new Ro;
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Vo=255;function Mo(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function Lo(e){const t=64-(function(e){let t=0;for(let n=0;n<8;++n){const r=Mo(255&e[n]);if(t+=r,8!==r)break}return t})(e);return Math.ceil(t/8)}class qo{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Wt(e);else if(e<2048)this.Wt(960|e>>>6),this.Wt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Wt(480|e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e);else{const e=t.codePointAt(0);this.Wt(240|e>>>18),this.Wt(128|63&e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e)}}this.Gt()}Yt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{const e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Zt(e){const t=this.Xt(e),n=Lo(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){const t=this.Xt(e),n=Lo(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(Vo),this.rn(255)}sn(){this._n(Vo),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Wt(e){const t=255&e;0===t?(this.rn(0),this.rn(255)):t===Vo?(this.rn(Vo),this.rn(0)):this.rn(t)}jt(e){const t=255&e;0===t?(this._n(0),this._n(255)):t===Vo?(this._n(Vo),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Uo{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class jo{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Bo{constructor(){this.un=new qo,this.cn=new Uo(this.un),this.ln=new jo(this.un)}seed(e){this.un.seed(e)}hn(e){return 0===e?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class zo{constructor(e,t,n,r){this.Pn=e,this.Tn=t,this.In=n,this.dn=r}En(){const e=this.dn.length,t=0===e||255===this.dn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new zo(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Ko(this.In),directionalValue:Ko(this.dn),orderedDocumentKey:Ko(t),documentKey:n.path.toArray()}}Rn(e,t,n){const r=this.An(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function $o(e,t){let n=e.Pn-t.Pn;return 0!==n?n:(n=Go(e.In,t.In),0!==n?n:(n=Go(e.dn,t.dn),0!==n?n:te.comparator(e.Tn,t.Tn)))}function Go(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function Ko(e){return(0,l.isSafariOrWebkit)()?(function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t})(e):e}function Qo(e){return"string"!=typeof e?e:(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
    * @license
    * Copyright 2022 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(e)}class Wo{constructor(e){this.Vn=new yn((e,t)=>ee.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Vn=this.Vn.add(e):this.fn.push(e)}}get gn(){return this.Vn.size>1}pn(e){if(x(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=we(e);if(void 0!==t&&!this.yn(t))return!1;const n=ve(e);let r=new Set,s=0,i=0;for(;s<n.length&&this.yn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const e=this.Vn.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[s];if(!this.wn(e,t)||!this.Sn(this.mn[i++],t))return!1}++s}for(;s<n.length;++s){const e=n[s];if(i>=this.mn.length||!this.Sn(this.mn[i++],e))return!1}return!0}bn(){if(this.gn)return null;let e=new yn(ee.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Ie(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ie(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ie(n.field,"asc"===n.dir?0:1)));return new ye(ye.UNKNOWN_ID,this.collectionId,t,Te.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ho(e){var t,n;if(x(e instanceof _r||e instanceof Tr,20012),e instanceof _r){if(e instanceof Mr){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>_r.create(e.field,"==",t)))||[];return Tr.create(r,"or")}return e}const r=e.filters.map(e=>Ho(e));return Tr.create(r,e.op)}function Xo(e){if(0===e.getFilters().length)return[];const t=ea(Ho(e));return x(Zo(t),7391),Yo(t)||Jo(t)?[t]:t.getFilters()}function Yo(e){return e instanceof _r}function Jo(e){return e instanceof Tr&&xr(e)}function Zo(e){return Yo(e)||Jo(e)||(function(e){if(e instanceof Tr&&Sr(e)){for(const t of e.getFilters())if(!Yo(t)&&!Jo(t))return!1;return!0}return!1})(e)}function ea(e){if(x(e instanceof _r||e instanceof Tr,34018),e instanceof _r)return e;if(1===e.filters.length)return ea(e.filters[0]);const t=e.filters.map(e=>ea(e));let n=Tr.create(t,e.op);return n=ra(n),Zo(n)?n:(x(n instanceof Tr,64498),x(Er(n),40251),x(n.filters.length>1,57927),n.filters.reduce((e,t)=>ta(e,t)))}function ta(e,t){let n;return x(e instanceof _r||e instanceof Tr,38388),x(t instanceof _r||t instanceof Tr,25473),n=e instanceof _r?t instanceof _r?(function(e,t){return Tr.create([e,t],"and")})(e,t):na(e,t):t instanceof _r?na(t,e):(function(e,t){if(x(e.filters.length>0&&t.filters.length>0,48005),Er(e)&&Er(t))return Ar(e,t.getFilters());const n=Sr(e)?e:t,r=Sr(e)?t:e,s=n.filters.map(e=>ta(e,r));return Tr.create(s,"or")})(e,t),ra(n)}function na(e,t){if(Er(t))return Ar(t,e.getFilters());{const n=t.filters.map(t=>ta(e,t));return Tr.create(n,"or")}}function ra(e){if(x(e instanceof _r||e instanceof Tr,11850),e instanceof _r)return e;const t=e.getFilters();if(1===t.length)return ra(t[0]);if(Dr(e))return e;const n=t.map(e=>ra(e)),r=[];return n.forEach(t=>{t instanceof _r?r.push(t):t instanceof Tr&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Tr.create(r,e.op)
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class sa{constructor(){this.Dn=new ia}addToCollectionParentIndex(e,t){return this.Dn.add(t),ke.resolve()}getCollectionParents(e,t){return ke.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ke.resolve()}deleteFieldIndex(e,t){return ke.resolve()}deleteAllFieldIndexes(e){return ke.resolve()}createTargetIndexes(e,t){return ke.resolve()}getDocumentsMatchingTarget(e,t){return ke.resolve(null)}getIndexType(e,t){return ke.resolve(0)}getFieldIndexes(e,t){return ke.resolve([])}getNextCollectionGroupToUpdate(e){return ke.resolve(null)}getMinOffset(e,t){return ke.resolve(xe.min())}getMinOffsetFromCollectionGroup(e,t){return ke.resolve(xe.min())}updateCollectionGroup(e,t,n){return ke.resolve()}updateIndexEntries(e,t){return ke.resolve()}}class ia{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new yn(J.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new yn(J.comparator)).toArray()}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const oa="IndexedDbIndexManager",aa=new Uint8Array(0);class ua{constructor(e,t){this.databaseId=t,this.vn=new ia,this.Cn=new ds(e=>Br(e),(e,t)=>zr(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:n,parent:Je(r)};return ca(e).put(s)}return ke.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[H(t),""],!1,!0);return ca(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(tt(r.parent))}return n})}addFieldIndex(e,t){const n=ha(e),r=(function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}})(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=da(e);return s.next(e=>{n.put(Co(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=ha(e),r=da(e),s=la(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ha(e),n=la(e),r=da(e);return t.Y().next(()=>n.Y()).next(()=>r.Y())}createTargetIndexes(e,t){return ke.forEach(this.Fn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new Wo(t).bn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=la(e);let r=!0;const s=new Map;return ke.forEach(this.Fn(t),t=>this.Mn(e,t).next(e=>{r&&(r=!!e),s.set(t,e)})).next(()=>{if(r){let e=Ts();const r=[];return ke.forEach(s,(s,i)=>{b(oa,`Using index ${(function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`})(s)} to execute ${Br(t)}`);const o=(function(e,t){const n=we(t);if(void 0===n)return null;for(const t of Gr(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null})(i,s),a=(function(e,t){const n=new Map;for(const r of ve(t))for(const t of Gr(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null})(i,s),u=(function(e,t){const n=[];let r=!0;for(const s of ve(t)){const t=0===s.kind?Kr(e,s.fieldPath,e.startAt):Qr(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new pr(n,r)})(i,s),c=(function(e,t){const n=[];let r=!0;for(const s of ve(t)){const t=0===s.kind?Qr(e,s.fieldPath,e.endAt):Kr(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new pr(n,r)})(i,s),l=this.xn(s,i,u),h=this.xn(s,i,c),d=this.On(s,i,a),f=this.Nn(s.indexId,o,l,u.inclusive,h,c.inclusive,d);return ke.forEach(f,s=>n.H(s,t.limit).next(t=>{t.forEach(t=>{const n=te.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return ke.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(t=0===e.filters.length?[e]:Xo(Tr.create(e.filters,"and")).map(t=>jr(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),u=a/(null!=t?t.length:1),c=[];for(let l=0;l<a;++l){const a=t?this.Bn(t[l/u]):aa,h=this.Ln(e,a,n[l%u],r),d=this.kn(e,a,s[l%u],i),f=o.map(t=>this.Ln(e,a,t,!0));c.push(...this.createRange(h,d,f))}return c}Ln(e,t,n,r){const s=new zo(e,te.empty(),t,n);return r?s:s.En()}kn(e,t,n,r){const s=new zo(e,te.empty(),t,n);return r?s.En():s}Mn(e,t){const n=new Wo(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.pn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Fn(t);return ke.forEach(r,t=>this.Mn(e,t).next(e=>{e?0!==n&&e.fields.length<(function(e){let t=new yn(ee.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)})(t)&&(n=1):n=0})).next(()=>(function(e){return null!==e.limit})(t)&&r.length>1&&2===n?1:n)}qn(e,t){const n=new Bo;for(const r of ve(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.hn(r.kind);Ro.Ut.bt(e,s)}return n.an()}Bn(e){const t=new Bo;return Ro.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Bo;return Ro.Ut.bt(Zn(this.databaseId,t),n.hn((function(e){const t=ve(e);return 0===t.length?0:t[t.length-1].kind})(e))),n.an()}On(e,t,n){if(null===n)return[];let r=[];r.push(new Bo);let s=0;for(const i of ve(e)){const e=n[s++];for(const n of r)if(this.$n(t,i.fieldPath)&&tr(e))r=this.Un(r,i,e);else{const t=n.hn(i.kind);Ro.Ut.bt(e,t)}}return this.Kn(r)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const r=[...e],s=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new Bo;r.seed(n.an()),Ro.Ut.bt(e,r.hn(t.kind)),s.push(r)}return s}$n(e,t){return!!e.filters.find(e=>e instanceof _r&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=ha(e),r=da(e);return(t?n.j(Mt,IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return ke.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push((function(e,t){const n=t?new Te(t.sequenceNumber,new xe(Io(t.readTime),new te(tt(t.documentKey)),t.largestBatchId)):Te.empty(),r=e.fields.map(([e,t])=>new Ie(ee.fromServerFormat(e),t));return new ye(e.indexId,e.collectionGroup,r,n)})(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:$(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=ha(e),s=da(e);return this.Wn(e).next(e=>r.j(Mt,IDBKeyRange.bound(t,t)).next(t=>ke.forEach(t,t=>s.put(Co(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return ke.forEach(t,(t,r)=>{const s=n.get(t.collectionGroup);return(s?ke.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next(s=>(n.set(t.collectionGroup,s),ke.forEach(s,n=>this.Gn(e,t,n).next(t=>{const s=this.zn(r,n);return t.isEqual(s)?ke.resolve():this.jn(e,r,n,t,s)}))))})}Jn(e,t,n,r){return la(e).put(r.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,r){return la(e).delete(r.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const r=la(e);let s=new yn($o);return r.X({index:$t,range:IDBKeyRange.only([n.indexId,this.uid,Ko(this.Qn(n,t))])},(e,r)=>{s=s.add(new zo(n.indexId,t,Qo(r.arrayValue),Qo(r.directionalValue)))}).next(()=>s)}zn(e,t){let n=new yn($o);const r=this.qn(t,e);if(null==r)return n;const s=we(t);if(null!=s){const i=e.data.field(s.fieldPath);if(tr(i))for(const s of i.arrayValue.values||[])n=n.add(new zo(t.indexId,e.key,this.Bn(s),r))}else n=n.add(new zo(t.indexId,e.key,aa,r));return n}jn(e,t,n,r,s){b(oa,"Updating index entries for document '%s'",t.key);const i=[];return(function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=vn(i),u=vn(o);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=vn(o)):t?(s(a),a=vn(i)):(a=vn(i),u=vn(o))}})(r,s,$o,r=>{i.push(this.Jn(e,t,n,r))},r=>{i.push(this.Hn(e,t,n,r))}),ke.waitFor(i)}Wn(e){let t=1;return da(e).X({index:Ut,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>$o(e,t)).filter((e,t,n)=>!t||0!==$o(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=$o(s,e),i=$o(s,t);if(0===n)r[0]=e.En();else if(n>0&&i<0)r.push(s),r.push(s.En());else if(i>0)break}r.push(t);const s=[];for(let e=0;e<r.length;e+=2){if(this.Yn(r[e],r[e+1]))return[];const t=r[e].Rn(this.uid,aa,te.empty()),n=r[e+1].Rn(this.uid,aa,te.empty());s.push(IDBKeyRange.bound(t,n))}return s}Yn(e,t){return $o(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fa)}getMinOffset(e,t){return ke.mapArray(this.Fn(t),t=>this.Mn(e,t).next(e=>e||E(44426))).next(fa)}}function ca(e){return cn(e,kt)}function la(e){return cn(e,Bt)}function ha(e){return cn(e,Vt)}function da(e){return cn(e,Lt)}function fa(e){x(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;De(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new xe(t.readTime,t.documentKey,n)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ma={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ga=41943040;class pa{static withCacheSize(e){return new pa(e,pa.DEFAULT_COLLECTION_PERCENTILE,pa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ya(e,t,n){const r=e.store(ot),s=e.store(ft),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(e,t,n)=>(a++,n.delete()));i.push(u.next(()=>{x(1===a,47070,{batchId:n.batchId})}));const c=[];for(const e of n.mutations){const r=ht(t,e.key.path,n.batchId);i.push(s.delete(r)),c.push(e.key)}return ke.waitFor(i).next(()=>c)}function wa(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw E(14731);t=e.noDocument}return JSON.stringify(t).length}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */pa.DEFAULT_COLLECTION_PERCENTILE=10,pa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pa.DEFAULT=new pa(ga,pa.DEFAULT_COLLECTION_PERCENTILE,pa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pa.DISABLED=new pa(-1,0,0);class va{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Zn={}}static yt(e,t,n,r){x(""!==e.uid,64387);const s=e.isAuthenticated()?e.uid:"";return new va(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ia(e).X({index:ut,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const s=_a(e),i=Ia(e);return i.add({}).next(o=>{x("number"==typeof o,49019);const a=new ii(o,t,n,r),u=(function(e,t,n){const r=n.baseMutations.map(t=>Yi(e.gt,t)),s=n.mutations.map(t=>Yi(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}})(this.serializer,this.userId,a),c=[];let l=new yn((e,t)=>$(e.canonicalString(),t.canonicalString()));for(const e of r){const t=ht(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),c.push(i.put(u)),c.push(s.put(t,dt))}return l.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),ke.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return Ia(e).get(t).next(e=>e?(x(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),_o(this.serializer,e)):null)}Xn(e,t){return this.Zn[t]?ke.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Zn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Ia(e).X({index:ut,range:r},(e,t,r)=>{t.userId===this.userId&&(x(t.batchId>=n,47524,{er:n}),s=_o(this.serializer,t)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Qe;return Ia(e).X({index:ut,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Qe],[this.userId,Number.POSITIVE_INFINITY]);return Ia(e).j(ut,t).next(e=>e.map(e=>_o(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=lt(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return _a(e).X({range:r},(n,r,i)=>{const[o,a,u]=n,c=tt(a);if(o===this.userId&&t.path.isEqual(c))return Ia(e).get(u).next(e=>{if(!e)throw E(61480,{tr:n,batchId:u});x(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:u}),s.push(_o(this.serializer,e))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new yn($);const r=[];return t.forEach(t=>{const s=lt(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=_a(e).X({range:i},(e,r,s)=>{const[i,o,a]=e,u=tt(o);i===this.userId&&t.path.isEqual(u)?n=n.add(a):s.done()});r.push(o)}),ke.waitFor(r).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=lt(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new yn($);return _a(e).X({range:i},(e,t,s)=>{const[i,a,u]=e,c=tt(a);i===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(u)):s.done()}).next(()=>this.nr(e,o))}nr(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Ia(e).get(t).next(e=>{if(null===e)throw E(35274,{batchId:t});x(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(_o(this.serializer,e))}))}),ke.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ya(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),ke.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ke.resolve();const n=IDBKeyRange.lowerBound((function(e){return[e]})(this.userId)),r=[];return _a(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=tt(e[1]);r.push(t)}else n.done()}).next(()=>{x(0===r.length,56720,{ir:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return ba(e,this.userId,t)}sr(e){return Ta(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Qe,lastStreamToken:""})}}function ba(e,t,n){const r=lt(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return _a(e).X({range:i,Z:!0},(e,n,r)=>{const[i,a,u]=e;i===t&&a===s&&(o=!0),r.done()}).next(()=>o)}function Ia(e){return cn(e,ot)}function _a(e){return cn(e,ft)}function Ta(e){return cn(e,it)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ea{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ea(0)}static ur(){return new Ea(-1)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Sa{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const n=new Ea(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(e=>ge.fromTimestamp(new me(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.lr(e,r)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>xa(e).delete(t.targetId)).next(()=>this.cr(e)).next(t=>(x(t.targetCount>0,8065),t.targetCount-=1,this.lr(e,t)))}removeTargets(e,t,n){let r=0;const s=[];return xa(e).X((i,o)=>{const a=To(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))}).next(()=>ke.waitFor(s)).next(()=>r)}forEachTarget(e,t){return xa(e).X((e,n)=>{const r=To(n);t(r)})}cr(e){return Da(e).get(Nt).next(e=>(x(null!==e,2888),e))}lr(e,t){return Da(e).put(Nt,t)}hr(e,t){return xa(e).put(Eo(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Br(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return xa(e).X({range:r,index:Tt},(e,n,r)=>{const i=To(n);zr(t,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(e,t,n){const r=[],s=Ca(e);return t.forEach(t=>{const i=Je(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))}),ke.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ca(e);return ke.forEach(t,t=>{const s=Je(t.path);return ke.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Ca(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ca(e);let s=Ts();return r.X({range:n,Z:!0},(e,t,n)=>{const r=tt(e[1]),i=new te(r);s=s.add(i)}).next(()=>s)}containsKey(e,t){const n=Je(t.path),r=IDBKeyRange.bound([n],[H(n)],!1,!0);let s=0;return Ca(e).X({index:Dt,Z:!0,range:r},([e,t],n,r)=>{0!==e&&(s++,r.done())}).next(()=>s>0)}Et(e,t){return xa(e).get(t).next(e=>e?To(e):null)}}function xa(e){return cn(e,_t)}function Da(e){return cn(e,At)}function Ca(e){return cn(e,St)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Na="LruGarbageCollector",Aa=1048576;function ka([e,t],[n,r]){const s=$(e,n);return 0===s?$(t,r):s}class Oa{constructor(e){this.Tr=e,this.buffer=new yn(ka),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ka(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pa{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){b(Na,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Le(e)?b(Na,"Ignoring IndexedDB error during garbage collection: ",e):await Ae(e)}await this.Rr(3e5)})}}class Fa{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ke.resolve(Ke.ue);const n=new Oa(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector","Garbage collection skipped; disabled"),ke.resolve(ma)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ma):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,r,s,i,o,a,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),w()<=c.LogLevel.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-a)+"ms\n"+`Total Duration: ${u-l}ms`),ke.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}function Ra(e,t){return new Fa(e,t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Va{constructor(e,t){this.db=e,this.garbageCollector=Ra(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(e,n)=>t(n))}addReference(e,t,n){return Ma(e,n)}removeReference(e,t,n){return Ma(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ma(e,t)}Sr(e,t){return(function(e,t){let n=!1;return Ta(e).ee(r=>ba(e,r,t).next(e=>(e&&(n=!0),ke.resolve(!e)))).next(()=>n)})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.wr(e,(i,o)=>{if(o<=t){const t=this.Sr(e,i).next(t=>{if(!t)return s++,n.getEntry(e,i).next(()=>(n.removeEntry(i,ge.min()),Ca(e).delete((function(e){return[0,Je(e.path)]})(i))))});r.push(t)}}).next(()=>ke.waitFor(r)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ma(e,t)}wr(e,t){const n=Ca(e);let r,s=Ke.ue;return n.X({index:Dt},([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==Ke.ue&&t(new te(tt(r)),s),s=o,r=i):s=Ke.ue}).next(()=>{s!==Ke.ue&&t(new te(tt(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ma(e,t){return Ca(e).put((function(e,t){return{targetId:0,path:Je(e.path),sequenceNumber:t}})(t,e.currentSequenceNumber))}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class La{constructor(){this.changes=new ds(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ke.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class qa{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return za(e).put(n)}removeEntry(e,t,n){return za(e).delete((function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],vo(t),n[n.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=gr.newInvalidDocument(t);return za(e).X({index:pt,range:IDBKeyRange.only($a(t))},(e,r)=>{n=this.Dr(t,r)}).next(()=>n)}vr(e,t){let n={size:0,document:gr.newInvalidDocument(t)};return za(e).X({index:pt,range:IDBKeyRange.only($a(t))},(e,r)=>{n={document:this.Dr(t,r),size:wa(r)}}).next(()=>n)}getEntries(e,t){let n=ms();return this.Cr(e,t,(e,t)=>{const r=this.Dr(e,t);n=n.insert(e,r)}).next(()=>n)}Fr(e,t){let n=ms(),r=new mn(te.comparator);return this.Cr(e,t,(e,t)=>{const s=this.Dr(e,t);n=n.insert(e,s),r=r.insert(e,wa(t))}).next(()=>({documents:n,Mr:r}))}Cr(e,t,n){if(t.isEmpty())return ke.resolve();let r=new yn(Ka);t.forEach(e=>r=r.add(e));const s=IDBKeyRange.bound($a(r.first()),$a(r.last())),i=r.getIterator();let o=i.getNext();return za(e).X({index:pt,range:s},(e,t,r)=>{const s=te.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ka(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.G($a(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),vo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return za(e).j(IDBKeyRange.bound(o,a,!0)).next(e=>{null==s||s.incrementDocumentReadCount(e.length);let n=ms();for(const s of e){const e=this.Dr(te.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(us(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let s=ms();const i=Ga(t,n),o=Ga(t,xe.max());return za(e).X({index:wt,range:IDBKeyRange.bound(i,o,!0)},(e,t,n)=>{const i=this.Dr(te.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(e){return new ja(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Ba(e).get(It).next(e=>(x(!!e,20021),e))}br(e,t){return Ba(e).put(It,t)}Dr(e,t){if(t){const e=yo(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(ge.min()))return e}return gr.newInvalidDocument(e)}}function Ua(e){return new qa(e)}class ja extends La{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new ds(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new yn((e,t)=>$(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=wo(this.Or.serializer,i);r=r.add(s.path.popLast());const u=wa(a);n+=u-o.size,t.push(this.Or.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=wo(this.Or.serializer,i.convertToNoDocument(ge.min()));t.push(this.Or.addEntry(e,s,n))}}),r.forEach(n=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Or.updateMetadata(e,n)),ke.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(e=>(this.Nr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:e,Mr:t})=>(t.forEach((t,n)=>{this.Nr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Ba(e){return cn(e,bt)}function za(e){return cn(e,mt)}function $a(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ga(e,t){const n=t.documentKey.path.toArray();return[e,vo(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ka(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(s=$(n[e],r[e]),s)return s;return s=$(n.length,r.length),s||(s=$(n[n.length-2],r[r.length-2]),s||$(n[n.length-1],r[r.length-1])
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */)}class Qa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Wa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Hs(n.mutation,e,bn.empty(),me.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Ts()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Ts()){const r=ws();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ps();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=ws();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Ts()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=ms();const i=bs(),o=bs();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Zs)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Hs(o.mutation,t,o.mutation.getFieldMask(),me.now())):i.set(t.key,bn.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Qa(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=bs();let r=new mn((e,t)=>e-t),s=Ts();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||bn.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Ts()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=vs();u.forEach(e=>{if(!s.has(e)){const r=Qs(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return ke.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return(function(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jr(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):ke.resolve(ws());let o=pe,a=s;return i.next(t=>ke.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ke.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,Ts())).next(e=>({batchId:o,changes:ys(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next(e=>{let t=ps();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=ps();return this.indexManager.getCollectionParents(e,s).next(o=>ke.forEach(o,o=>{const a=(function(e,t){return new Wr(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)})(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,gr.newInvalidDocument(r)))});let n=ps();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&Hs(i.mutation,r,bn.empty(),me.now()),us(t,r)&&(n=n.insert(e,r))}),n})}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ha{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ke.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(e){return{id:e.id,version:e.version,createTime:Mi(e.createTime)}})(t)),ke.resolve()}getNamedQuery(e,t){return ke.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(e){return{name:e.name,query:So(e.bundledQuery),readTime:Mi(e.readTime)}})(t)),ke.resolve()}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Xa{constructor(){this.overlays=new mn(te.comparator),this.kr=new Map}getOverlay(e,t){return ke.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ws();return ke.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),ke.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.kr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),ke.resolve()}getOverlaysForCollection(e,t,n){const r=ws(),s=t.length+1,i=new te(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ke.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new mn((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=ws(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ws(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return ke.resolve(o)}wt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ai(t,n));let s=this.kr.get(t);void 0===s&&(s=Ts(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ya{constructor(){this.sessionToken=Tn.EMPTY_BYTE_STRING}getSessionToken(e){return ke.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ke.resolve()}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ja{constructor(){this.qr=new yn(Za.Qr),this.$r=new yn(Za.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Za(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Za(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){const t=new te(new J([])),n=new Za(t,e),r=new Za(t,e+1),s=[];return this.$r.forEachInRange([n,r],e=>{this.Wr(e),s.push(e.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new te(new J([])),n=new Za(t,e),r=new Za(t,e+1);let s=Ts();return this.$r.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new Za(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Za{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return te.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||te.comparator(e.key,t.key)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class eu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yn(Za.Qr)}checkEmpty(e){return ke.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ii(s,t,n,r);this.mutationQueue.push(i);for(const t of r)this.Yr=this.Yr.add(new Za(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ke.resolve(i)}lookupMutationBatch(e,t){return ke.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return ke.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ke.resolve(0===this.mutationQueue.length?Qe:this.er-1)}getAllMutationBatches(e){return ke.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Za(t,0),r=new Za(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);s.push(t)}),ke.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new yn($);return t.forEach(e=>{const t=new Za(e,0),r=new Za(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),ke.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;te.isDocumentKey(s)||(s=s.child(""));const i=new Za(new te(s),0);let o=new yn($);return this.Yr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Hr)),!0)},i),ke.resolve(this.ei(o))}ei(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){x(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return ke.forEach(t.mutations,r=>{const s=new Za(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new Za(t,0),r=this.Yr.firstAfterOrEqual(n);return ke.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ke.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class tu{constructor(e){this.ni=e,this.docs=new mn(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ke.resolve(n?n.document.mutableCopy():gr.newInvalidDocument(t))}getEntries(e,t){let n=ms();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():gr.newInvalidDocument(e))}),ke.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=ms();const i=t.path,o=new te(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||De(Se(o),n)<=0||(r.has(o.key)||us(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ke.resolve(s)}getAllFromCollectionGroup(e,t,n,r){E(9500)}ri(e,t){return ke.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nu(this)}getSize(e){return ke.resolve(this.size)}}class nu extends La{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)}),ke.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ru{constructor(e){this.persistence=e,this.ii=new ds(e=>Br(e),zr),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.si=0,this.oi=new Ja,this.targetCount=0,this._i=Ea.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),ke.resolve()}getLastRemoteSnapshotVersion(e){return ke.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ke.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ke.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),ke.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ea(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ke.resolve()}updateTargetData(e,t){return this.hr(t),ke.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ke.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ii.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ii.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),ke.waitFor(s).next(()=>r)}getTargetCount(e){return ke.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return ke.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),ke.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),ke.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ke.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return ke.resolve(n)}containsKey(e,t){return ke.resolve(this.oi.containsKey(t))}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class su{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ke(0),this.ci=!1,this.ci=!0,this.li=new Ya,this.referenceDelegate=e(this),this.hi=new ru(this),this.indexManager=new sa,this.remoteDocumentCache=(function(e){return new tu(e)})(e=>this.referenceDelegate.Pi(e)),this.serializer=new po(t),this.Ti=new Ha(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new eu(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){b("MemoryPersistence","Starting transaction:",e);const r=new iu(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return ke.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class iu extends Ne{constructor(e){super(),this.currentSequenceNumber=e}}class ou{constructor(e){this.persistence=e,this.Ai=new Ja,this.Ri=null}static Vi(e){return new ou(e)}get mi(){if(this.Ri)return this.Ri;throw E(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),ke.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),ke.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ke.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ke.forEach(this.mi,n=>{const r=te.fromPath(n);return this.fi(e,r).next(e=>{e||t.removeEntry(r,ge.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return ke.or([()=>ke.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class au{constructor(e,t){this.persistence=e,this.gi=new ds(e=>Je(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=Ra(this,t)}static Vi(e,t){return new au(e,t)}Ii(){}di(e){return ke.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return ke.forEach(this.gi,(n,r)=>this.Sr(e,n,r).next(e=>e?ke.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ri(e,r=>this.Sr(e,r,t).next(e=>{e||(n++,s.removeEntry(r,ge.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ke.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),ke.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),ke.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ke.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jn(e.data.value)),t}Sr(e,t,n){return ke.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.gi.get(t);return ke.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class uu{constructor(e){this.serializer=e}q(e,t,n,r){const s=new Pe("createOrUpgrade",t);n<1&&r>=1&&((function(e){e.createObjectStore(rt)})(e),(function(e){e.createObjectStore(it,{keyPath:"userId"});e.createObjectStore(ot,{keyPath:at,autoIncrement:!0}).createIndex(ut,ct,{unique:!0}),e.createObjectStore(ft)})(e),cu(e),(function(e){e.createObjectStore(nt)})(e));let i=ke.resolve();return n<3&&r>=3&&(0!==n&&((function(e){e.deleteObjectStore(St),e.deleteObjectStore(_t),e.deleteObjectStore(At)})(e),cu(e)),i=i.next(()=>(function(e){const t=e.store(At),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ge.min().toTimestamp(),targetCount:0};return t.put(Nt,n)})(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>(function(e,t){return t.store(ot).j().next(n=>{e.deleteObjectStore(ot),e.createObjectStore(ot,{keyPath:at,autoIncrement:!0}).createIndex(ut,ct,{unique:!0});const r=t.store(ot),s=n.map(e=>r.put(e));return ke.waitFor(s)})})(e,s))),i=i.next(()=>{!(function(e){e.createObjectStore(Pt,{keyPath:"clientId"})})(e)})),n<5&&r>=5&&(i=i.next(()=>this.pi(s))),n<6&&r>=6&&(i=i.next(()=>((function(e){e.createObjectStore(bt)})(e),this.yi(s)))),n<7&&r>=7&&(i=i.next(()=>this.wi(s))),n<8&&r>=8&&(i=i.next(()=>this.Si(e,s))),n<9&&r>=9&&(i=i.next(()=>{!(function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&r>=10&&(i=i.next(()=>this.bi(s))),n<11&&r>=11&&(i=i.next(()=>{!(function(e){e.createObjectStore(Ft,{keyPath:"bundleId"})})(e),(function(e){e.createObjectStore(Rt,{keyPath:"name"})})(e)})),n<12&&r>=12&&(i=i.next(()=>{!(function(e){const t=e.createObjectStore(Kt,{keyPath:Qt});t.createIndex(Wt,Ht,{unique:!1}),t.createIndex(Xt,Yt,{unique:!1})})(e)})),n<13&&r>=13&&(i=i.next(()=>(function(e){const t=e.createObjectStore(mt,{keyPath:gt});t.createIndex(pt,yt),t.createIndex(wt,vt)})(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(nt))),n<14&&r>=14&&(i=i.next(()=>this.Ci(e,s))),n<15&&r>=15&&(i=i.next(()=>(function(e){e.createObjectStore(Vt,{keyPath:"indexId",autoIncrement:!0}).createIndex(Mt,"collectionGroup",{unique:!1});e.createObjectStore(Lt,{keyPath:qt}).createIndex(Ut,jt,{unique:!1});e.createObjectStore(Bt,{keyPath:zt}).createIndex($t,Gt,{unique:!1})})(e))),n<16&&r>=16&&(i=i.next(()=>{t.objectStore(Lt).clear()}).next(()=>{t.objectStore(Bt).clear()})),n<17&&r>=17&&(i=i.next(()=>{!(function(e){e.createObjectStore(Jt,{keyPath:"name"})})(e)})),n<18&&r>=18&&(0,l.isSafariOrWebkit)()&&(i=i.next(()=>{t.objectStore(Lt).clear()}).next(()=>{t.objectStore(Bt).clear()})),i}yi(e){let t=0;return e.store(nt).X((e,n)=>{t+=wa(n)}).next(()=>{const n={byteSize:t};return e.store(bt).put(It,n)})}pi(e){const t=e.store(it),n=e.store(ot);return t.j().next(t=>ke.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,Qe],[t.userId,t.lastAcknowledgedBatchId]);return n.j(ut,r).next(n=>ke.forEach(n,n=>{x(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const r=_o(this.serializer,n);return ya(e,t.userId,r).next(()=>{})}))}))}wi(e){const t=e.store(St),n=e.store(nt);return e.store(At).get(Nt).next(e=>{const r=[];return n.X((n,s)=>{const i=new J(n),o=(function(e){return[0,Je(e)]})(i);r.push(t.get(o).next(n=>n?ke.resolve():(n=>t.put({targetId:0,path:Je(n),sequenceNumber:e.highestListenSequenceNumber}))(i)))}).next(()=>ke.waitFor(r))})}Si(e,t){e.createObjectStore(kt,{keyPath:Ot});const n=t.store(kt),r=new ia,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Je(r)})}};return t.store(nt).X({Z:!0},(e,t)=>{const n=new J(e);return s(n.popLast())}).next(()=>t.store(ft).X({Z:!0},([e,t,n],r)=>{const i=tt(t);return s(i.popLast())}))}bi(e){const t=e.store(_t);return t.X((e,n)=>{const r=To(n),s=Eo(this.serializer,r);return t.put(s)})}Di(e,t){const n=t.store(nt),r=[];return n.X((e,n)=>{const s=t.store(mt),i=(function(e){return e.document?new te(J.fromString(e.document.name).popFirst(5)):e.noDocument?te.fromSegments(e.noDocument.path):e.unknownDocument?te.fromSegments(e.unknownDocument.path):E(36783)}
/**
          * @license
          * Copyright 2017 Google LLC
          *
          * Licensed under the Apache License, Version 2.0 (the "License");
          * you may not use this file except in compliance with the License.
          * You may obtain a copy of the License at
          *
          *   http://www.apache.org/licenses/LICENSE-2.0
          *
          * Unless required by applicable law or agreed to in writing, software
          * distributed under the License is distributed on an "AS IS" BASIS,
          * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          * See the License for the specific language governing permissions and
          * limitations under the License.
          */)(n).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(o))}).next(()=>ke.waitFor(r))}Ci(e,t){const n=t.store(ot),r=Ua(this.serializer),s=new su(ou.Vi,this.serializer.gt);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Ts();_o(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),ke.forEach(n,(e,n)=>{const i=new g(n),o=Oo.yt(this.serializer,i),a=s.getIndexManager(i),u=va.yt(i,this.serializer,a,s.referenceDelegate);return new Wa(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new un(t,Ke.ue),e).next()})})}}function cu(e){e.createObjectStore(St,{keyPath:xt}).createIndex(Dt,Ct,{unique:!0}),e.createObjectStore(_t,{keyPath:"targetId"}).createIndex(Tt,Et,{unique:!0}),e.createObjectStore(At)}const lu="IndexedDbPersistence",hu=18e5,du=5e3,fu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",mu="main";class gu{constructor(e,t,n,r,s,i,o,a,u,c,l=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=i,this.document=o,this.Mi=u,this.xi=c,this.Oi=l,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=e=>Promise.resolve(),!gu.C())throw new A(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Va(this,r),this.Qi=t+mu,this.serializer=new po(a),this.$i=new Fe(this.Qi,this.Oi,new uu(this.serializer)),this.li=new Fo,this.hi=new Sa(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ua(this.serializer),this.Ti=new No,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===c&&I(lu,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(N.FAILED_PRECONDITION,fu);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Ke(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Le(e))return b(lu,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b(lu,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return pu(e).get(st).next(e=>ke.resolve(this.Xi(e)))}es(e){return yu(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,hu)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=cn(e,Pt);return t.j().next(e=>{const n=this.rs(e,hu),r=e.filter(e=>-1===n.indexOf(e));return ke.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?ke.resolve(!0):pu(e).get(st).next(t=>{if(null!==t&&this.ns(t.leaseTimestampMs,du)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new A(N.FAILED_PRECONDITION,fu);return!1}}return!(!this.networkEnabled||!this.inForeground)||yu(e).j().next(e=>void 0===this.rs(e,du).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&b(lu,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[rt,Pt],e=>{const t=new un(e,Ke.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(e=>this.ns(e.updateTimeMs,t)&&!this._s(e.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>yu(e).j().next(e=>this.rs(e,hu).map(e=>e.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return va.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ua(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Oo.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){b(lu,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=(function(e){return 18===e?an:17===e?on:16===e?sn:15===e?rn:14===e?nn:13===e?tn:12===e?en:11===e?Zt:void E(60245)})(this.Oi);let i;return this.$i.runTransaction(e,r,s,r=>(i=new un(r,this.ui?this.ui.next():Ke.ue),"readwrite-primary"===t?this.Ji(i).next(e=>!!e||this.Hi(i)).next(t=>{if(!t)throw I(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new A(N.FAILED_PRECONDITION,Ce);return n(i)}).next(e=>this.Zi(i).next(()=>e)):this.Ts(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Ts(e){return pu(e).get(st).next(e=>{if(null!==e&&this.ns(e.leaseTimestampMs,du)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new A(N.FAILED_PRECONDITION,fu)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return pu(e).put(st,t)}static C(){return Fe.C()}Yi(e){const t=pu(e);return t.get(st).next(e=>this.Xi(e)?(b(lu,"Releasing primary lease."),t.delete(st)):ke.resolve())}ns(e,t){const n=Date.now();return!(e<n-t||e>n&&(I(`Detected an update time that is in the future: ${e} > ${n}`),1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground="visible"===this.document.visibilityState)}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;(0,l.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=null!==(null===(t=this.Ui)||void 0===t?void 0:t.getItem(this.ss(e)));return b(lu,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return I(lu,"Failed to get zombied client id.",e),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){I("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch(e){}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function pu(e){return cn(e,rt)}function yu(e){return cn(e,Pt)}function wu(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class vu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=Ts(),r=Ts();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new vu(e,t.fromCache,n,r)}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Iu{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(0,l.isSafari)()?8:Re((0,l.getUA)())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.ps(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ys(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new bu;return this.ws(e,t,n).next(r=>{if(s.result=r,this.Rs)return this.Ss(e,t,n,r.size)})}).next(()=>s.result)}Ss(e,t,n,r){return n.documentReadCount<this.Vs?(w()<=c.LogLevel.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",as(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ke.resolve()):(w()<=c.LogLevel.DEBUG&&b("QueryEngine","Query:",as(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(w()<=c.LogLevel.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",as(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,es(t))):ke.resolve())}ps(e,t){if(Yr(t))return ke.resolve(null);let n=es(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ss(t,null,"F"),n=es(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=Ts(...r);return this.gs.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.bs(t,r);return this.Ds(t,i,s,n.readTime)?this.ps(e,ss(t,null,"F")):this.vs(e,i,t,n)}))})))}ys(e,t,n,r){return Yr(t)||r.isEqual(ge.min())?ke.resolve(null):this.gs.getDocuments(e,n).next(s=>{const i=this.bs(t,s);return this.Ds(t,i,n,r)?ke.resolve(null):(w()<=c.LogLevel.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),as(t)),this.vs(e,i,t,Ee(r,pe)).next(e=>e))})}bs(e,t){let n=new yn(ls(e));return t.forEach((t,r)=>{us(e,r)&&(n=n.add(r))}),n}Ds(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ws(e,t,n){return w()<=c.LogLevel.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",as(t)),this.gs.getDocumentsMatchingQuery(e,t,xe.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const _u="LocalStore",Tu=3e8;class Eu{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new mn($),this.Ms=new ds(e=>Br(e),zr),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wa(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Su(e,t,n,r){return new Eu(e,t,n,r)}async function xu(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.Ns(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=Ts();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Bs:e,removedBatchIds:s,addedBatchIds:i}))})})}function Du(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){const s=n.batch,i=s.keys();let o=ke.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);x(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,(function(e){let t=Ts();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t})(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function Cu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Nu(e,t){const n=C(e),r=t.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const o=[];t.targetChanges.forEach((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.hi.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.hi.addMatchingKeys(e,i.addedDocuments,a)));let c=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(Tn.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),(function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=Tu)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0})(u,c,i)&&o.push(n.hi.updateTargetData(e,c))});let a=ms(),u=Ts();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Au(e,i,t.documentUpdates).next(e=>{a=e.Ls,u=e.ks})),!r.isEqual(ge.min())){const t=n.hi.getLastRemoteSnapshotVersion(e).next(t=>n.hi.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return ke.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,u)).next(()=>a)}).then(e=>(n.Fs=s,e))}function Au(e,t,n){let r=Ts(),s=Ts();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=ms();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ge.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):b(_u,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ls:r,ks:s}})}function ku(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Qe),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Ou(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.hi.getTargetData(e,t).next(s=>s?(r=s,ke.resolve(r)):n.hi.allocateTargetId(e).next(s=>(r=new go(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.hi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Fs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(e.targetId,e),n.Ms.set(t,e.targetId)),e})}async function Pu(e,t,n){const r=C(e),s=r.Fs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Le(e))throw e;b(_u,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Fu(e,t,n){const r=C(e);let s=ge.min(),i=Ts();return r.persistence.runTransaction("Execute query","readwrite",e=>(function(e,t,n){const r=C(e),s=r.Ms.get(n);return void 0!==s?ke.resolve(r.Fs.get(s)):r.hi.getTargetData(t,n)})(r,e,es(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?s:ge.min(),n?i:Ts())).next(e=>(Mu(r,cs(t),e),{documents:e,qs:i})))}function Ru(e,t){const n=C(e),r=C(n.hi),s=n.Fs.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function Vu(e,t){const n=C(e),r=n.xs.get(t)||ge.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Os.getAllFromCollectionGroup(e,t,Ee(r,pe),Number.MAX_SAFE_INTEGER)).then(e=>(Mu(n,t,e),e))}function Mu(e,t,n){let r=e.xs.get(t)||ge.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.xs.set(t,r)}async function Lu(e,t,n,r){const s=C(e);let i=Ts(),o=ms();for(const e of n){const n=t.Qs(e.metadata.name);e.document&&(i=i.add(n));const r=t.$s(e);r.setReadTime(t.Us(e.metadata.readTime)),o=o.insert(n,r)}const a=s.Os.newChangeBuffer({trackRemovals:!0}),u=await Ou(s,(function(e){return es(Xr(J.fromString(`__bundle__/docs/${e}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",e=>Au(e,a,o).next(t=>(a.apply(e),t)).next(t=>s.hi.removeMatchingKeysForTargetId(e,u.targetId).next(()=>s.hi.addMatchingKeys(e,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,t.Ls,t.ks)).next(()=>t.Ls)))}async function qu(e,t,n=Ts()){const r=await Ou(e,es(So(t.bundledQuery))),s=C(e);return s.persistence.runTransaction("Save named query","readwrite",e=>{const i=Mi(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ti.saveNamedQuery(e,t);const o=r.withResumeToken(Tn.EMPTY_BYTE_STRING,i);return s.Fs=s.Fs.insert(o.targetId,o),s.hi.updateTargetData(e,o).next(()=>s.hi.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>s.hi.addMatchingKeys(e,n,r.targetId)).next(()=>s.Ti.saveNamedQuery(e,t))})}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Uu="firestore_clients";function ju(e,t){return`${Uu}_${e}_${t}`}const Bu="firestore_mutations";function zu(e,t,n){let r=`${Bu}_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}const $u="firestore_targets";function Gu(e,t){return`${$u}_${e}_${t}`}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ku="SharedClientState";class Qu{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ks(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new A(r.error.code,r.error.message))),i?new Qu(e,t,r.state,s):(I(Ku,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wu{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new A(n.error.code,n.error.message))),s?new Wu(e,n.state,r):(I(Ku,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Ss();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=Xe(n.activeTargetIds[e]),s=s.add(n.activeTargetIds[e]);return r?new Hu(e,s):(I(Ku,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xu{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Xu(t.clientId,t.onlineState):(I(Ku,`Failed to parse online state: ${e}`),null)}}class Yu{constructor(){this.activeTargetIds=Ss()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ju{constructor(e,t,n,r,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new mn($),this.started=!1,this.Zs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=ju(this.persistenceKey,this.js),this.eo=(function(e){return`firestore_sequence_number_${e}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Yu),this.no=new RegExp(`^${Uu}_${i}_([^_]*)$`),this.ro=new RegExp(`^${Bu}_${i}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${$u}_${i}_(\\d+)$`),this.so=(function(e){return`firestore_online_state_${e}`})(this.persistenceKey),this.oo=(function(e){return`firestore_bundle_loaded_v2_${e}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const t of e){if(t===this.js)continue;const e=this.getItem(ju(this.persistenceKey,t));if(e){const n=Hu.Ks(t,e);n&&(this.Ys=this.Ys.insert(n.clientId,n))}}this._o();const t=this.storage.getItem(this.so);if(t){const e=this.ao(t);e&&this.uo(e)}for(const e of this.Zs)this.Hs(e);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(Gu(this.persistenceKey,e));if(t){const r=Wu.Ks(e,t);r&&(n=r.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gu(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ho(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return b(Ku,"READ",e,t),t}setItem(e,t){b(Ku,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){b(Ku,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(b(Ku,"EVENT",t.key,t.newValue),t.key===this.Xs)return void I("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.no.test(t.key)){if(null==t.newValue){const e=this.Ao(t.key);return this.Ro(e,null)}{const e=this.Vo(t.key,t.newValue);if(e)return this.Ro(e.clientId,e)}}else if(this.ro.test(t.key)){if(null!==t.newValue){const e=this.mo(t.key,t.newValue);if(e)return this.fo(e)}}else if(this.io.test(t.key)){if(null!==t.newValue){const e=this.po(t.key,t.newValue);if(e)return this.yo(e)}}else if(t.key===this.so){if(null!==t.newValue){const e=this.ao(t.newValue);if(e)return this.uo(e)}}else if(t.key===this.eo){const e=(function(e){let t=Ke.ue;if(null!=e)try{const n=JSON.parse(e);x("number"==typeof n,30636,{wo:e}),t=n}catch(e){I(Ku,"Failed to read sequence number from WebStorage",e)}return t})(t.newValue);e!==Ke.ue&&this.sequenceNumberHandler(e)}else if(t.key===this.oo){const e=this.So(t.newValue);await Promise.all(e.map(e=>this.syncEngine.bo(e)))}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const r=new Qu(this.currentUser,e,t,n),s=zu(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Ws())}ho(e){const t=zu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const r=Gu(this.persistenceKey,e),s=new Wu(e,t,n);this.setItem(r,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return Hu.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Qu.Ks(new g(s),r,t)}po(e,t){const n=this.io.exec(e),r=Number(n[1]);return Wu.Ks(r,t)}ao(e){return Xu.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);b(Ku,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),r=this.co(this.Ys),s=this.co(n),i=[],o=[];return s.forEach(e=>{r.has(e)||i.push(e)}),r.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.Co(i,o).then(()=>{this.Ys=n})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Ss();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Zu{constructor(){this.Fo=new Yu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Yu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ec{xo(e){}shutdown(){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const tc="ConnectivityMonitor";class nc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){b(tc,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){b(tc,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */let rc=null;function sc(){return null===rc?rc=268435456+Math.round(2147483648*Math.random()):rc++,"0x"+rc.toString(16)
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const ic="RestConnection",oc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ac{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===Vn?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const i=sc(),o=this.Go(e,t.toUriEncodedString());b(ic,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(a,r,s);const{host:u}=new URL(o),c=(0,l.isCloudWorkstation)(u);return this.jo(e,o,a,n,c).then(t=>(b(ic,`Received RPC '${e}' ${i}: `,t),t),t=>{throw _(ic,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}Jo(e,t,n,r,s,i){return this.Wo(e,t,n,r,s)}zo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+p,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){const n=oc[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class uc{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const cc="WebChannelConnection";class lc extends ac{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,s){const i=sc();return new Promise((s,o)=>{const a=new d.XhrIo;a.setWithCredentials(!0),a.listenOnce(d.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.ErrorCode.NO_ERROR:const t=a.getResponseJson();b(cc,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.ErrorCode.TIMEOUT:b(cc,`RPC '${e}' ${i} timed out`),o(new A(N.DEADLINE_EXCEEDED,"Request time out"));break;case d.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(b(cc,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=(function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(t)>=0?t:N.UNKNOWN})(t.status);o(new A(e,t.message))}else o(new A(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(N.UNAVAILABLE,"Connection failed."));break;default:E(9055,{c_:e,streamId:i,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{b(cc,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);b(cc,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",u,n,15)})}P_(e,t,n){const r=sc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,d.createWebChannelTransport)(),o=(0,d.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");b(cc,`Creating RPC '${e}' stream ${r}: ${c}`,a);const l=i.createWebChannel(c,a);this.T_(l);let h=!1,f=!1;const m=new uc({Ho:t=>{f?b(cc,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(b(cc,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),b(cc,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Yo:()=>l.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(l,d.WebChannel.EventType.OPEN,()=>{f||(b(cc,`RPC '${e}' stream ${r} transport opened.`),m.s_())}),g(l,d.WebChannel.EventType.CLOSE,()=>{f||(f=!0,b(cc,`RPC '${e}' stream ${r} transport closed`),m.__(),this.I_(l))}),g(l,d.WebChannel.EventType.ERROR,t=>{f||(f=!0,_(cc,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),m.__(new A(N.UNAVAILABLE,"The operation could not be completed")))}),g(l,d.WebChannel.EventType.MESSAGE,t=>{var n;if(!f){const s=t.data[0];x(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){b(cc,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=(function(e){const t=li[e];if(void 0!==t)return fi(t)})(t),s=o.message;void 0===n&&(n=N.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),f=!0,m.__(new A(n,s)),l.close()}else b(cc,`RPC '${e}' stream ${r} received:`,s),m.a_(s)}}),g(o,d.Event.STAT_EVENT,t=>{t.stat===d.Stat.PROXY?b(cc,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===d.Stat.NOPROXY&&b(cc,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.o_()},0),m}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function hc(){return"undefined"!=typeof window?window:null}function dc(){return"undefined"!=typeof document?document:null}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function fc(e){return new Oi(e,!0)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const gc="PersistentStream";class pc{constructor(e,t,n,r,s,i,o,a){this.Fi=e,this.w_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mc(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(I(t.toString()),I("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.W_(e,n)},t=>{e(()=>{const e=new A(N.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return b(gc,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(b(gc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yc extends pc{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Xi(this.serializer,e),n=(function(e){if(!("targetChange"in e))return ge.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ge.min():t.readTime?Mi(t.readTime):ge.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Gi(this.serializer),t.addTarget=(function(e,t){let n;const r=t.target;if(n=$r(r)?{documents:eo(e,r)}:{query:to(e,r).Vt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ri(e,t.resumeToken);const r=Pi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ge.min())>0){n.readTime=Fi(e,t.snapshotVersion.toTimestamp());const r=Pi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n})(this.serializer,e);const n=so(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Gi(this.serializer),t.removeTarget=e,this.k_(t)}}class wc extends pc{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return x(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,x(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){x(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Zi(e.writeResults,e.commitTime),n=Mi(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Gi(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Yi(this.serializer,e))};this.k_(t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class vc{}class bc extends vc{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new A(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(e,qi(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(N.UNKNOWN,e.toString())})}Jo(e,t,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Jo(e,qi(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(N.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ic{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(I(t),this._a=!1):b("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const _c="RemoteStore";class Tc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{Oc(this)&&(b(_c,"Restarting streams for network reachability change."),await(async function(e){const t=C(e);t.Ia.add(4),await Sc(t),t.Aa.set("Unknown"),t.Ia.delete(4),await Ec(t)})(this))})}),this.Aa=new Ic(n,r)}}async function Ec(e){if(Oc(e))for(const t of e.da)await t(!0)}async function Sc(e){for(const t of e.da)await t(!1)}function xc(e,t){const n=C(e);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),kc(n)?Ac(n):Yc(n).x_()&&Cc(n,t))}function Dc(e,t){const n=C(e),r=Yc(n);n.Ta.delete(t),r.x_()&&Nc(n,t),0===n.Ta.size&&(r.x_()?r.B_():Oc(n)&&n.Aa.set("Unknown"))}function Cc(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ge.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Yc(e).H_(t)}function Nc(e,t){e.Ra.$e(t),Yc(e).Y_(t)}function Ac(e){e.Ra=new xi({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),Yc(e).start(),e.Aa.aa()}function kc(e){return Oc(e)&&!Yc(e).M_()&&e.Ta.size>0}function Oc(e){return 0===C(e).Ia.size}function Pc(e){e.Ra=void 0}async function Fc(e){e.Aa.set("Online")}async function Rc(e){e.Ta.forEach((t,n)=>{Cc(e,t)})}async function Vc(e,t){Pc(e),kc(e)?(e.Aa.la(t),Ac(e)):e.Aa.set("Unknown")}async function Mc(e,t,n){if(e.Aa.set("Online"),t instanceof Ei&&2===t.state&&t.cause)try{await(async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ta.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ta.delete(r),e.Ra.removeTarget(r))})(e,t)}catch(n){b(_c,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Lc(e,n)}else if(t instanceof _i?e.Ra.Ye(t):t instanceof Ti?e.Ra.it(t):e.Ra.et(t),!n.isEqual(ge.min()))try{const t=await Cu(e.localStore);n.compareTo(t)>=0&&await(function(e,t){const n=e.Ra.Pt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Ta.get(r);s&&e.Ta.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(Tn.EMPTY_BYTE_STRING,r.snapshotVersion)),Nc(e,t);const s=new go(r.target,t,n,r.sequenceNumber);Cc(e,s)}),e.remoteSyncer.applyRemoteEvent(n)})(e,n)}catch(t){b(_c,"Failed to raise snapshot:",t),await Lc(e,t)}}async function Lc(e,t,n){if(!Le(t))throw t;e.Ia.add(1),await Sc(e),e.Aa.set("Offline"),n||(n=()=>Cu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{b(_c,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Ec(e)})}function qc(e,t){return t().catch(n=>Lc(e,n,t))}async function Uc(e){const t=C(e),n=Jc(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Qe;for(;jc(t);)try{const e=await ku(t.localStore,r);if(null===e){0===t.Pa.length&&n.B_();break}r=e.batchId,Bc(t,e)}catch(e){await Lc(t,e)}zc(t)&&$c(t)}function jc(e){return Oc(e)&&e.Pa.length<10}function Bc(e,t){e.Pa.push(t);const n=Jc(e);n.x_()&&n.Z_&&n.X_(t.mutations)}function zc(e){return Oc(e)&&!Jc(e).M_()&&e.Pa.length>0}function $c(e){Jc(e).start()}async function Gc(e){Jc(e).na()}async function Kc(e){const t=Jc(e);for(const n of e.Pa)t.X_(n.mutations)}async function Qc(e,t,n){const r=e.Pa.shift(),s=oi.from(r,t,n);await qc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Uc(e)}async function Wc(e,t){t&&Jc(e).Z_&&await(async function(e,t){if((function(e){return di(e)&&e!==N.ABORTED})(t.code)){const n=e.Pa.shift();Jc(e).N_(),await qc(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Uc(e)}})(e,t),zc(e)&&$c(e)}async function Hc(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),b(_c,"RemoteStore received new credentials");const r=Oc(n);n.Ia.add(3),await Sc(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Ec(n)}async function Xc(e,t){const n=C(e);t?(n.Ia.delete(2),await Ec(n)):t||(n.Ia.add(2),await Sc(n),n.Aa.set("Unknown"))}function Yc(e){return e.Va||(e.Va=(function(e,t,n){const r=C(e);return r.ia(),new yc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
    * @license
    * Copyright 2018 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */})(e.datastore,e.asyncQueue,{Zo:Fc.bind(null,e),e_:Rc.bind(null,e),n_:Vc.bind(null,e),J_:Mc.bind(null,e)}),e.da.push(async t=>{t?(e.Va.N_(),kc(e)?Ac(e):e.Aa.set("Unknown")):(await e.Va.stop(),Pc(e))})),e.Va}function Jc(e){return e.ma||(e.ma=(function(e,t,n){const r=C(e);return r.ia(),new wc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),e_:Gc.bind(null,e),n_:Wc.bind(null,e),ea:Kc.bind(null,e),ta:Qc.bind(null,e)}),e.da.push(async t=>{t?(e.ma.N_(),await Uc(e)):(await e.ma.stop(),e.Pa.length>0&&(b(_c,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ma
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class Zc{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Zc(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new A(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function el(e,t){if(I("AsyncQueue",`${t}: ${e}`),Le(e))return new A(N.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class tl{static emptySet(e){return new tl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=ps(),this.sortedSet=new mn(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new tl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class nl{constructor(){this.fa=new mn(te.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?0!==e.type&&3===n.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==n.type?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.fa=this.fa.remove(t):1===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):E(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class rl{constructor(e,t,n,r,s,i,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new rl(e,t,tl.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class sl{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class il{constructor(){this.queries=ol(),this.onlineState="Unknown",this.Da=new Set}terminate(){!(function(e,t){const n=C(e),r=n.queries;n.queries=ol(),r.forEach((e,n)=>{for(const e of n.wa)e.onError(t)})})(this,new A(N.ABORTED,"Firestore shutting down"))}}function ol(){return new ds(e=>os(e),is)}async function al(e,t){const n=C(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Sa()&&t.ba()&&(r=2):(i=new sl,r=t.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=el(e,`Initialization of query '${as(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.wa.push(t),t.va(n.onlineState),i.ya&&t.Ca(i.ya)&&hl(n)}async function ul(e,t){const n=C(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.wa.indexOf(t);e>=0&&(i.wa.splice(e,1),0===i.wa.length?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cl(e,t){const n=C(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.wa)t.Ca(e)&&(r=!0);s.ya=e}}r&&hl(n)}function ll(e,t,n){const r=C(e),s=r.queries.get(t);if(s)for(const e of s.wa)e.onError(n);r.queries.delete(t)}function hl(e){e.Da.forEach(e=>{e.next()})}var dl,fl;(fl=dl||(dl={})).Fa="default",fl.Cache="cache";class ml{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new rl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache)return!0;if(!this.ba())return!0;const n="Offline"!==t;return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=rl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==dl.Cache}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gl{constructor(e,t){this.qa=e,this.byteLength=t}Qa(){return"metadata"in this.qa}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pl{constructor(e){this.serializer=e}Qs(e){return Bi(this.serializer,e)}$s(e){return e.metadata.exists?Wi(this.serializer,e.document,!1):gr.newNoDocument(this.Qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return Mi(e)}}class yl{constructor(e,t){this.$a=e,this.serializer=t,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=wl(e)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Ua.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Ka.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;const n=J.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.qa.document&&(this.Ka[this.Ka.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){const t=new Map,n=new pl(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Qs(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ts()).add(e);t.set(n,r)}}return t}async za(e){const t=await Lu(e,new pl(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const t of this.Ua)await qu(e,t,n.get(t.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:t}}}function wl(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class vl{constructor(e){this.key=e}}class bl{constructor(e){this.key=e}}class Il{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ts(),this.mutatedKeys=Ts(),this.Xa=ls(e),this.eu=new tl(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new nl,r=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),l=us(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.iu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Xa(l,a)>0||u&&this.Xa(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{eu:i,ru:n,Ds:o,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const i=e.ru.pa();i.sort((e,t)=>(function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E(20277,{At:e})}};return n(e)-n(t)}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(n),r=null!=r&&r;const o=t&&!r?this.ou():[],a=0===this.Za.size&&this.current&&!r?1:0,u=a!==this.Ya;return this.Ya=a,0!==i.length||u?{snapshot:new rl(this.query,e.eu,s,i,e.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:o}:{_u:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new nl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ts(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});const t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new bl(e))}),this.Za.forEach(n=>{e.has(n)||t.push(new vl(n))}),t}uu(e){this.Ha=e.qs,this.Za=Ts();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return rl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}const _l="SyncEngine";class Tl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class El{constructor(e){this.key=e,this.lu=!1}}class Sl{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.hu={},this.Pu=new ds(e=>os(e),is),this.Tu=new Map,this.Iu=new Set,this.du=new mn(te.comparator),this.Eu=new Map,this.Au=new Ja,this.Ru={},this.Vu=new Map,this.mu=Ea.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function xl(e,t,n=!0){const r=sh(e);let s;const i=r.Pu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Cl(r,t,n,!0),s}async function Dl(e,t){const n=sh(e);await Cl(n,t,!0,!1)}async function Cl(e,t,n,r){const s=await Ou(e.localStore,es(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Nl(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&xc(e.remoteStore,s),a}async function Nl(e,t,n,r,s){e.gu=(t,n,r)=>(async function(e,t,n,r){let s=t.view.nu(n);s.Ds&&(s=await Fu(e.localStore,t.query,!1).then(({documents:e})=>t.view.nu(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return zl(e,t.targetId,a._u),a.snapshot})(e,t,n,r);const i=await Fu(e.localStore,t,!0),o=new Il(t,i.qs),a=o.nu(i.documents),u=Ii.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,u);zl(e,n,c._u);const l=new Tl(t,n,o);return e.Pu.set(t,l),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),c.snapshot}async function Al(e,t,n){const r=C(e),s=r.Pu.get(t),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(e=>!is(e,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dc(r.remoteStore,s.targetId),jl(r,s.targetId)}).catch(Ae)):(jl(r,s.targetId),await Pu(r.localStore,s.targetId,!0))}async function kl(e,t){const n=C(e),r=n.Pu.get(t),s=n.Tu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dc(n.remoteStore,r.targetId))}async function Ol(e,t,n){const r=ih(e);try{const e=await(function(e,t){const n=C(e),r=me.now(),s=t.reduce((e,t)=>e.add(t.key),Ts());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=ms(),u=Ts();return n.Os.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=Xs(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Zs(e.key,t,mr(t.value.mapValue),$s.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ys(i)}))})(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),(function(e,t,n){let r=e.Ru[e.currentUser.toKey()];r||(r=new mn($)),r=r.insert(t,n),e.Ru[e.currentUser.toKey()]=r})(r,e.batchId,n),await Kl(r,e.changes),await Uc(r.remoteStore)}catch(e){const t=el(e,"Failed to persist write");n.reject(t)}}async function Pl(e,t){const n=C(e);try{const e=await Nu(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Eu.get(t);r&&(x(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.lu=!0:e.modifiedDocuments.size>0?x(r.lu,14607):e.removedDocuments.size>0&&(x(r.lu,42227),r.lu=!1))}),await Kl(n,e,t)}catch(e){await Ae(e)}}function Fl(e,t,n){const r=C(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Pu.forEach((n,r)=>{const s=r.view.va(t);s.snapshot&&e.push(s.snapshot)}),(function(e,t){const n=C(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.wa)e.va(t)&&(r=!0)}),r&&hl(n)})(r.eventManager,t),e.length&&r.hu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rl(e,t,n){const r=C(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Eu.get(t),i=s&&s.key;if(i){let e=new mn(te.comparator);e=e.insert(i,gr.newNoDocument(i,ge.min()));const n=Ts().add(i),s=new bi(ge.min(),new Map,new mn($),e,n);await Pl(r,s),r.du=r.du.remove(i),r.Eu.delete(t),Gl(r)}else await Pu(r.localStore,t,!1).then(()=>jl(r,t,n)).catch(Ae)}async function Vl(e,t){const n=C(e),r=t.batch.batchId;try{const e=await Du(n.localStore,t);Ul(n,r,null),ql(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kl(n,e)}catch(e){await Ae(e)}}async function Ml(e,t,n){const r=C(e);try{const e=await(function(e,t){const n=C(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(x(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})})(r.localStore,t);Ul(r,t,n),ql(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Kl(r,e)}catch(n){await Ae(n)}}async function Ll(e,t){const n=C(e);Oc(n.remoteStore)||b(_l,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await(function(e){const t=C(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))})(n.localStore);if(e===Qe)return void t.resolve();const r=n.Vu.get(e)||[];r.push(t),n.Vu.set(e,r)}catch(e){const n=el(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function ql(e,t){(e.Vu.get(t)||[]).forEach(e=>{e.resolve()}),e.Vu.delete(t)}function Ul(e,t,n){const r=C(e);let s=r.Ru[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function jl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Tu.get(t))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||Bl(e,t)})}function Bl(e,t){e.Iu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(Dc(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),Gl(e))}function zl(e,t,n){for(const r of n)r instanceof vl?(e.Au.addReference(r.key,t),$l(e,r)):r instanceof bl?(b(_l,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||Bl(e,r.key)):E(19791,{yu:r})}function $l(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(b(_l,"New document in limbo: "+n),e.Iu.add(r),Gl(e))}function Gl(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new te(J.fromString(t)),r=e.mu.next();e.Eu.set(r,new El(n)),e.du=e.du.insert(n,r),xc(e.remoteStore,new go(es(Xr(n.path)),r,"TargetPurposeLimboResolution",Ke.ue))}}async function Kl(e,t,n){const r=C(e),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((e,a)=>{o.push(r.gu(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const s=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(e){s.push(e);const t=vu.Es(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.hu.J_(s),await(async function(e,t){const n=C(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ke.forEach(t,t=>ke.forEach(t.Is,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>ke.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Le(e))throw e;b(_u,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Fs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Fs=n.Fs.insert(t,s)}}})(r.localStore,i))}async function Ql(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){b(_l,"User change. New user:",t.toKey());const e=await xu(n.localStore,t);n.currentUser=t,(function(e,t){e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new A(N.CANCELLED,t))})}),e.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Kl(n,e.Bs)}}function Wl(e,t){const n=C(e),r=n.Eu.get(t);if(r&&r.lu)return Ts().add(r.key);{let e=Ts();const r=n.Tu.get(t);if(!r)return e;for(const t of r){const r=n.Pu.get(t);e=e.unionWith(r.view.tu)}return e}}async function Hl(e,t){const n=C(e),r=await Fu(n.localStore,t.query,!0),s=t.view.uu(r);return n.isPrimaryClient&&zl(n,t.targetId,s._u),s}async function Xl(e,t){const n=C(e);return Vu(n.localStore,t).then(e=>Kl(n,e))}async function Yl(e,t,n,r){const s=C(e),i=await(function(e,t){const n=C(e),r=C(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Xn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):ke.resolve(null)))})(s.localStore,t);null!==i?("pending"===n?await Uc(s.remoteStore):"acknowledged"===n||"rejected"===n?(Ul(s,t,r||null),ql(s,t),(function(e,t){C(C(e).mutationQueue).rr(t)})(s.localStore,t)):E(6720,"Unknown batchState",{wu:n}),await Kl(s,i)):b(_l,"Cannot apply mutation batch with id: "+t)}async function Jl(e,t){const n=C(e);if(sh(n),ih(n),!0===t&&!0!==n.fu){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Zl(n,e.toArray());n.fu=!0,await Xc(n.remoteStore,!0);for(const e of t)xc(n.remoteStore,e)}else if(!1===t&&!1!==n.fu){const e=[];let t=Promise.resolve();n.Tu.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(jl(n,s),Pu(n.localStore,s,!0))),Dc(n.remoteStore,s)}),await t,await Zl(n,e),(function(e){const t=C(e);t.Eu.forEach((e,n)=>{Dc(t.remoteStore,n)}),t.Au.jr(),t.Eu=new Map,t.du=new mn(te.comparator)})(n),n.fu=!1,await Xc(n.remoteStore,!1)}}async function Zl(e,t,n){const r=C(e),s=[],i=[];for(const e of t){let t;const n=r.Tu.get(e);if(n&&0!==n.length){t=await Ou(r.localStore,es(n[0]));for(const e of n){const t=r.Pu.get(e),n=await Hl(r,t);n.snapshot&&i.push(n.snapshot)}}else{const n=await Ru(r.localStore,e);t=await Ou(r.localStore,n),await Nl(r,eh(n),e,!1,t.resumeToken)}s.push(t)}return r.hu.J_(i),s}function eh(e){return Hr(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function th(e){return(function(e){return C(C(e).persistence).Ps()})(C(e).localStore)}async function nh(e,t,n,r){const s=C(e);if(s.fu)return void b(_l,"Ignoring unexpected query state notification.");const i=s.Tu.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await Vu(s.localStore,cs(i[0])),r=bi.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Tn.EMPTY_BYTE_STRING);await Kl(s,e,r);break}case"rejected":await Pu(s.localStore,t,!0),jl(s,t,r);break;default:E(64155,n)}}async function rh(e,t,n){const r=sh(e);if(r.fu){for(const e of t){if(r.Tu.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){b(_l,"Adding an already active target "+e);continue}const t=await Ru(r.localStore,e),n=await Ou(r.localStore,t);await Nl(r,eh(t),n.targetId,!1,n.resumeToken),xc(r.remoteStore,n)}for(const e of n)r.Tu.has(e)&&await Pu(r.localStore,e,!1).then(()=>{Dc(r.remoteStore,e),jl(r,e)}).catch(Ae)}}function sh(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rl.bind(null,t),t.hu.J_=cl.bind(null,t.eventManager),t.hu.pu=ll.bind(null,t.eventManager),t}function ih(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ml.bind(null,t),t}function oh(e,t,n){const r=C(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await(function(e,t){const n=C(e),r=Mi(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ti.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)})(e.localStore,r))return await t.close(),n._completeWith((function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}})(r)),Promise.resolve(new Set);n._updateProgress(wl(r));const s=new yl(r,t.serializer);let i=await t.Su();for(;i;){const e=await s.Wa(i);e&&n._updateProgress(e),i=await t.Su()}const o=await s.za(e.localStore);return await Kl(e,o.Ja,void 0),await(function(e,t){const n=C(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ti.saveBundleMetadata(e,t))})(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.ja)}catch(e){return _(_l,`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Su(this.persistence,new Iu,e.initialUser,this.serializer)}Du(e){return new su(ou.Vi,this.serializer)}bu(e){return new Zu}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ah.provider={build:()=>new ah};class uh extends ah{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){x(this.persistence.referenceDelegate instanceof au,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Pa(n,e.asyncQueue,t)}Du(e){const t=void 0!==this.cacheSizeBytes?pa.withCacheSize(this.cacheSizeBytes):pa.DEFAULT;return new su(e=>au.Vi(e,t),this.serializer)}}class ch extends ah{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await ih(this.Mu.syncEngine),await Uc(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Su(this.persistence,new Iu,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Pa(n,e.asyncQueue,t)}Fu(e,t){const n=new Ge(t,this.persistence);return new $e(e.asyncQueue,n)}Du(e){const t=wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?pa.withCacheSize(this.cacheSizeBytes):pa.DEFAULT;return new gu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,hc(),dc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Zu}}class lh extends ch{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Ju&&(this.sharedClientState.syncEngine={Do:Yl.bind(null,t),vo:nh.bind(null,t),Co:rh.bind(null,t),Ps:th.bind(null,t),bo:Xl.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async e=>{await Jl(this.Mu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}bu(e){const t=hc();if(!Ju.C(t))throw new A(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ju(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class hh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Fl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ql.bind(null,this.syncEngine),await Xc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new il}createDatastore(e){const t=fc(e.databaseInfo.databaseId),n=(function(e){return new lc(e)})(e.databaseInfo);return(function(e,t,n,r){return new bc(e,t,n,r)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(e,t,n,r,s){return new Tc(e,t,n,r,s)})(this.localStore,this.datastore,e.asyncQueue,e=>Fl(this.syncEngine,e,0),nc.C()?new nc:new ec)}createSyncEngine(e,t){return(function(e,t,n,r,s,i,o){const a=new Sl(e,t,n,r,s,i);return o&&(a.fu=!0),a})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(e){const t=C(e);b(_c,"RemoteStore shutting down."),t.Ia.add(5),await Sc(t),t.Ea.shutdown(),t.Aa.set("Unknown")})(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function dh(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */hh.provider={build:()=>new hh};class fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):I("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mh{constructor(e,t){this.Nu=e,this.serializer=t,this.metadata=new k,this.buffer=new Uint8Array,this.Bu=new TextDecoder("utf-8"),this.Lu().then(e=>{e&&e.Qa()?this.metadata.resolve(e.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.qa)}`))},e=>this.metadata.reject(e))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const e=await this.ku();if(null===e)return null;const t=this.Bu.decode(e),n=Number(t);isNaN(n)&&this.qu(`length string (${t}) is not valid number`);const r=await this.Qu(n);return new gl(JSON.parse(r),e.length+n)}$u(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async ku(){for(;this.$u()<0&&!await this.Uu(););if(0===this.buffer.length)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const t=this.Bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Uu(){const e=await this.Nu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gh{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is\n         ${JSON.stringify(null==n?void 0:n.qa)}`);this.metadata=n;do{n=this.Su(),null!==n&&this.elements.push(n)}while(null!==n)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.ku(),t=this.Qu(e);return new gl(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new A(N.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ku(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if("{"===this.bundleData[t]){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ph{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new A(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(e,t){const n=C(e),r={documents:t.map(e=>ji(n.serializer,e))},s=await n.Jo("BatchGetDocuments",n.serializer.databaseId,J.emptyPath(),r,t.length),i=new Map;s.forEach(e=>{const t=Hi(n.serializer,e);i.set(t.key.toString(),t)});const o=[];return t.forEach(e=>{const t=i.get(e.toString());x(!!t,55234,{key:e}),o.push(t)}),o})(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new ri(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=te.fromPath(t);this.mutations.push(new si(n,this.precondition(n)))}),await(async function(e,t){const n=C(e),r={writes:t.map(e=>Yi(n.serializer,e))};await n.Wo("Commit",n.serializer.databaseId,J.emptyPath(),r)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E(50498,{Wu:e.constructor.name});t=ge.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new A(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ge.min())?$s.exists(!1):$s.updateTime(t):$s.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ge.min()))throw new A(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $s.updateTime(t)}return $s.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class yh{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Gu=n.maxAttempts,this.F_=new mc(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new ph(this.datastore),t=this.Ju(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Hu(e)}))}).catch(e=>{this.Hu(e)})})}Ju(e){try{const t=this.updateFunction(e);return!We(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!di(t)}return!1}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const wh="FirestoreClient";class vh{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=g.UNAUTHENTICATED,this.clientId=z.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{b(wh,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(b(wh,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=el(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function bh(e,t){e.asyncQueue.verifyOperationInProgress(),b(wh,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await xu(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>{_("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{b("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{_("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function Ih(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _h(e);b(wh,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Hc(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Hc(t.remoteStore,n)),e._onlineComponents=t}async function _h(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){b(wh,"Using user provided OfflineComponentProvider");try{await bh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(e){return"FirebaseError"===e.name?e.code===N.FAILED_PRECONDITION||e.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code})(n))throw n;_("Error using user provided cache. Falling back to memory cache: "+n),await bh(e,new ah)}}else b(wh,"Using default OfflineComponentProvider"),await bh(e,new uh(void 0));return e._offlineComponents}async function Th(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(b(wh,"Using user provided OnlineComponentProvider"),await Ih(e,e._uninitializedComponentsProvider._online)):(b(wh,"Using default OnlineComponentProvider"),await Ih(e,new hh))),e._onlineComponents}function Eh(e){return _h(e).then(e=>e.persistence)}function Sh(e){return _h(e).then(e=>e.localStore)}function xh(e){return Th(e).then(e=>e.remoteStore)}function Dh(e){return Th(e).then(e=>e.syncEngine)}function Ch(e){return Th(e).then(e=>e.datastore)}async function Nh(e){const t=await Th(e),n=t.eventManager;return n.onListen=xl.bind(null,t.syncEngine),n.onUnlisten=Al.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Dl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=kl.bind(null,t.syncEngine),n}function Ah(e){return e.asyncQueue.enqueue(async()=>{const t=await Eh(e),n=await xh(e);return t.setNetworkEnabled(!0),(function(e){const t=C(e);return t.Ia.delete(0),Ec(t)})(n)})}function kh(e){return e.asyncQueue.enqueue(async()=>{const t=await Eh(e),n=await xh(e);return t.setNetworkEnabled(!1),(async function(e){const t=C(e);t.Ia.add(0),await Sc(t),t.Aa.set("Offline")})(n)})}function Oh(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await(function(e,t){const n=C(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))})(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new A(N.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=el(e,`Failed to get document '${t} from cache`);n.reject(r)}})(await Sh(e),t,n)),n.promise}function Ph(e,t,n={}){const r=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){const i=new fh({next:a=>{i.Ou(),t.enqueueAndForget(()=>ul(e,o));const u=a.docs.has(n);!u&&a.fromCache?s.reject(new A(N.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?s.reject(new A(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:e=>s.reject(e)}),o=new ml(Xr(n.path),i,{includeMetadataChanges:!0,ka:!0});return al(e,o)})(await Nh(e),e.asyncQueue,t,n,r)),r.promise}function Fh(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await Fu(e,t,!0),s=new Il(t,r.qs),i=s.nu(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=el(e,`Failed to execute query '${t} against cache`);n.reject(r)}})(await Sh(e),t,n)),n.promise}function Rh(e,t,n={}){const r=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){const i=new fh({next:n=>{i.Ou(),t.enqueueAndForget(()=>ul(e,o)),n.fromCache&&"server"===r.source?s.reject(new A(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new ml(n,i,{includeMetadataChanges:!0,ka:!0});return al(e,o)})(await Nh(e),e.asyncQueue,t,n,r)),r.promise}function Vh(e,t,n){const r=new k;return e.asyncQueue.enqueueAndForget(async()=>{try{const s=await Ch(e);r.resolve((async function(e,t,n){var r;const s=C(e),{request:i,ft:o,parent:a}=no(s.serializer,ts(t),n);s.connection.Qo||delete i.parent;const u=(await s.Jo("RunAggregationQuery",s.serializer.databaseId,a,i,1)).filter(e=>!!e.result);x(1===u.length,64727);const c=null===(r=u[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(c).reduce((e,t)=>(e[o[t]]=c[t],e),{})})(s,t,n))}catch(e){r.reject(e)}}),r.promise}function Mh(e,t){const n=new fh(t);return e.asyncQueue.enqueueAndForget(async()=>(function(e,t){C(e).Da.add(t),t.next()})(await Nh(e),n)),()=>{n.Ou(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){C(e).Da.delete(t)})(await Nh(e),n))}}function Lh(e,t,n,r){const s=(function(e,t){let n;return n="string"==typeof e?B().encode(e):e,(function(e,t){return new mh(e,t)})((function(e,t){if(e instanceof Uint8Array)return dh(e,t);if(e instanceof ArrayBuffer)return dh(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(n),t)})(n,fc(t));e.asyncQueue.enqueueAndForget(async()=>{oh(await Dh(e),s,r)})}function qh(e,t){return e.asyncQueue.enqueue(async()=>(function(e,t){const n=C(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ti.getNamedQuery(e,t))})(await Sh(e),t))}function Uh(e,t){return(function(e,t){return new gh(e,t)})(e,t)}function jh(e,t){return e.asyncQueue.enqueue(async()=>(async function(e,t){const n=C(e),r=n.indexManager,s=[];return n.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(n=>
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
(function(e,t,n,r,s){e=[...e],t=[...t],e.sort(n),t.sort(n);const i=e.length,o=t.length;let a=0,u=0;for(;a<o&&u<i;){const i=n(e[u],t[a]);i<0?s(e[u++]):i>0?r(t[a++]):(a++,u++)}for(;a<o;)r(t[a++]);for(;u<i;)s(e[u++])})(n,t,be,t=>{s.push(r.addFieldIndex(e,t))},t=>{s.push(r.deleteFieldIndex(e,t))})).next(()=>ke.waitFor(s)))})(await Sh(e),t))}function Bh(e,t){return e.asyncQueue.enqueue(async()=>(function(e,t){C(e).Cs.Rs=t})(await Sh(e),t))}function zh(e){return e.asyncQueue.enqueue(async()=>(function(e){const t=C(e),n=t.indexManager;return t.persistence.runTransaction("Delete All Indexes","readwrite",e=>n.deleteAllFieldIndexes(e))})(await Sh(e)))}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function $h(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const Gh=new Map,Kh="firestore.googleapis.com",Qh=!0;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Wh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new A(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kh,this.ssl=Qh}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Qh;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=ga;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Aa)throw new A(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}re("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$h(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),(function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new A(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new A(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new A(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(e,t){return e.timeoutSeconds===t.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new A(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=(function(e){if(!e)return new P;switch(e.type){case"firstParty":return new M(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new A(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=Gh.get(e);t&&(b("ComponentProvider","Removing Datastore"),Gh.delete(e),t.terminate())})(this),Promise.resolve()}}function Xh(e,t,n,r={}){var s;e=ue(e,Hh);const i=(0,l.isCloudWorkstation)(t),o=e._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),u=`${t}:${n}`;i&&((0,l.pingServer)(`https://${u}`),(0,l.updateEmulatorBanner)("Firestore",!0)),o.host!==Kh&&o.host!==u&&_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:r});if(!(0,l.deepEqual)(c,a)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=g.MOCK_USER;else{t=(0,l.createMockUserToken)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new A(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new g(i)}e._authCredentials=new F(new O(t,n))}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Yh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Yh(this.firestore,e,this._query)}}class Jh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jh(this.firestore,e,this._key)}toJSON(){return{type:Jh._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(he(t,Jh._jsonSchema))return new Jh(e,n||null,new te(J.fromString(t.referencePath)))}}Jh._jsonSchemaVersion="firestore/documentReference/1.0",Jh._jsonSchema={type:le("string",Jh._jsonSchemaVersion),referencePath:le("string")};class Zh extends Yh{constructor(e,t,n){super(e,t,Xr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jh(this.firestore,null,new te(e))}withConverter(e){return new Zh(this.firestore,e,this._path)}}function ed(e,t,...n){if(e=(0,l.getModularInstance)(e),ne("collection","path",t),e instanceof Hh){const r=J.fromString(t,...n);return ie(r),new Zh(e,null,r)}{if(!(e instanceof Jh||e instanceof Zh))throw new A(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return ie(r),new Zh(e.firestore,null,r)}}function td(e,t){if(e=ue(e,Hh),ne("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new A(N.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Yh(e,null,(function(e){return new Wr(J.emptyPath(),e)})(t))}function nd(e,t,...n){if(e=(0,l.getModularInstance)(e),1===arguments.length&&(t=z.newId()),ne("doc","path",t),e instanceof Hh){const r=J.fromString(t,...n);return se(r),new Jh(e,null,new te(r))}{if(!(e instanceof Jh||e instanceof Zh))throw new A(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return se(r),new Jh(e.firestore,e instanceof Zh?e.converter:null,new te(r))}}function rd(e,t){return e=(0,l.getModularInstance)(e),t=(0,l.getModularInstance)(t),(e instanceof Jh||e instanceof Zh)&&(t instanceof Jh||t instanceof Zh)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function sd(e,t){return e=(0,l.getModularInstance)(e),t=(0,l.getModularInstance)(t),e instanceof Yh&&t instanceof Yh&&e.firestore===t.firestore&&is(e._query,t._query)&&e.converter===t.converter
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const id="AsyncQueue";class od{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mc(this,"async_queue_retry"),this.oc=()=>{const e=dc();e&&b(id,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=dc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=dc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new k;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Le(e))throw e;b(id,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,I("INTERNAL UNHANDLED ERROR: ",ad(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=Zc.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&E(47125,{hc:ad(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ad(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}function ud(e){return(function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(e,["next","error","complete"])}class cd{constructor(){this._progressObserver={},this._taskCompletionResolver=new k,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ld=-1;class hd extends Hh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new od,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new od(e),this._firestoreClient=void 0,await e}}}function dd(e,t,n){n||(n=Vn);const r=(0,a._getProvider)(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n}),s=r.getOptions(n);if((0,l.deepEqual)(s,t))return e;throw new A(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new A(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Aa)throw new A(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&(0,l.isCloudWorkstation)(t.host)&&(0,l.pingServer)(t.host),r.initialize({options:t,instanceIdentifier:n})}function fd(e,t){const n="object"==typeof e?e:(0,a.getApp)(),r="string"==typeof e?e:t||Vn,s=(0,a._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,l.getDefaultEmulatorHostnameAndPort)("firestore");e&&Xh(s,...e)}return s}function md(e){if(e._terminated)throw new A(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||gd(e),e._firestoreClient}function gd(e){var t,n,r;const s=e._freezeSettings(),i=(function(e,t,n,r){return new Rn(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,$h(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)})(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new vh(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&(function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}})(e._componentsProvider))}function pd(e,t){_("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return wd(e,hh.provider,{build:e=>new ch(e,n.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}async function yd(e){_("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=e._freezeSettings();wd(e,hh.provider,{build:e=>new lh(e,t.cacheSizeBytes)})}function wd(e,t,n){if((e=ue(e,hd))._firestoreClient||e._terminated)throw new A(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new A(N.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},gd(e)}function vd(e){if(e._initialized&&!e._terminated)throw new A(N.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new k;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await(async function(e){if(!Fe.C())return Promise.resolve();const t=e+mu;await Fe.delete(t)})(wu(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function bd(e){return(function(e){const t=new k;return e.asyncQueue.enqueueAndForget(async()=>Ll(await Dh(e),t)),t.promise})(md(e=ue(e,hd)))}function Id(e){return Ah(md(e=ue(e,hd)))}function _d(e){return kh(md(e=ue(e,hd)))}function Td(e){return(0,a._removeServiceInstance)(e.app,"firestore",e._databaseId.database),e._delete()}function Ed(e,t){const n=md(e=ue(e,hd)),r=new cd;return Lh(n,e._databaseId,t,r),r}function Sd(e,t){return qh(md(e=ue(e,hd)),t).then(t=>t?new Yh(e,null,t.query):null)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class xd{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Dd{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Cd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cd(Tn.fromBase64String(e))}catch(e){throw new A(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Cd(Tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cd._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(he(e,Cd._jsonSchema))return Cd.fromBase64String(e.bytes)}}Cd._jsonSchemaVersion="firestore/bytes/1.0",Cd._jsonSchema={type:le("string",Cd._jsonSchemaVersion),bytes:le("string")};
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class Nd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new A(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ad(){return new Nd(X)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class kd{constructor(e){this._methodName=e}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Od{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Od._jsonSchemaVersion}}static fromJSON(e){if(he(e,Od._jsonSchema))return new Od(e.latitude,e.longitude)}}Od._jsonSchemaVersion="firestore/geoPoint/1.0",Od._jsonSchema={type:le("string",Od._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class Pd{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return(function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Pd._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(he(e,Pd._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Pd(e.vectorValues);throw new A(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pd._jsonSchemaVersion="firestore/vectorValue/1.0",Pd._jsonSchema={type:le("string",Pd._jsonSchemaVersion),vectorValues:le("object")};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Fd=/^__.*__$/;class Rd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Zs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Js(e,this.data,t,this.fieldTransforms)}}class Vd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Zs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Md(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{Ec:e})}}class Ld{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return sf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(Md(this.Ec)&&Fd.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qd{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fc(e)}Dc(e,t,n,r=!1){return new Ld({Ec:e,methodName:t,bc:n,path:ee.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ud(e){const t=e._freezeSettings(),n=fc(e._databaseId);return new qd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jd(e,t,n,r,s,i={}){const o=e.Dc(i.merge||i.mergeFields?2:0,t,n,s);ef("Data must be an object, but it was:",o,r);const a=Jd(r,o);let u,c;if(i.merge)u=new bn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=tf(t,r,n);if(!o.contains(s))throw new A(N.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);of(e,s)||e.push(s)}u=new bn(e),c=o.fieldTransforms.filter(e=>u.covers(e.field))}else u=null,c=o.fieldTransforms;return new Rd(new fr(a),u,c)}class Bd extends kd{_toFieldTransform(e){if(2!==e.Ec)throw 1===e.Ec?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bd}}function zd(e,t,n){return new Ld({Ec:3,bc:t.settings.bc,methodName:e._methodName,mc:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class $d extends kd{_toFieldTransform(e){return new js(e.path,new Ps)}isEqual(e){return e instanceof $d}}class Gd extends kd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=zd(this,e,!0),n=this.vc.map(e=>Yd(e,t)),r=new Fs(n);return new js(e.path,r)}isEqual(e){return e instanceof Gd&&(0,l.deepEqual)(this.vc,e.vc)}}class Kd extends kd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=zd(this,e,!0),n=this.vc.map(e=>Yd(e,t)),r=new Vs(n);return new js(e.path,r)}isEqual(e){return e instanceof Kd&&(0,l.deepEqual)(this.vc,e.vc)}}class Qd extends kd{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Ls(e.serializer,Cs(e.serializer,this.Cc));return new js(e.path,t)}isEqual(e){return e instanceof Qd&&this.Cc===e.Cc}}function Wd(e,t,n,r){const s=e.Dc(1,t,n);ef("Data must be an object, but it was:",s,r);const i=[],o=fr.empty();hn(r,(e,r)=>{const a=rf(t,e,n);r=(0,l.getModularInstance)(r);const u=s.gc(a);if(r instanceof Bd)i.push(a);else{const e=Yd(r,u);null!=e&&(i.push(a),o.set(a,e))}});const a=new bn(i);return new Vd(o,a,s.fieldTransforms)}function Hd(e,t,n,r,s,i){const o=e.Dc(1,t,n),a=[tf(t,r,n)],u=[s];if(i.length%2!=0)throw new A(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)a.push(tf(t,i[e])),u.push(i[e+1]);const c=[],h=fr.empty();for(let e=a.length-1;e>=0;--e)if(!of(c,a[e])){const t=a[e];let n=u[e];n=(0,l.getModularInstance)(n);const r=o.gc(t);if(n instanceof Bd)c.push(t);else{const e=Yd(n,r);null!=e&&(c.push(t),h.set(t,e))}}const d=new bn(c);return new Vd(h,d,o.fieldTransforms)}function Xd(e,t,n,r=!1){return Yd(n,e.Dc(r?4:3,t))}function Yd(e,t){if(Zd(e=(0,l.getModularInstance)(e)))return ef("Unsupported field value:",t,e),Jd(e,t);if(e instanceof kd)return(function(e,t){if(!Md(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)})(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&4!==t.Ec)throw t.wc("Nested arrays are not supported");return(function(e,t){const n=[];let r=0;for(const s of e){let e=Yd(s,t.yc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}})(e,t)}return(function(e,t){if(null===(e=(0,l.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Cs(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=me.fromDate(e);return{timestampValue:Fi(t.serializer,n)}}if(e instanceof me){const n=new me(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Fi(t.serializer,n)}}if(e instanceof Od)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Cd)return{bytesValue:Ri(t.serializer,e._byteString)};if(e instanceof Jh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Li(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Pd)return(function(e,t){return{mapValue:{fields:{[Ln]:{stringValue:jn},[Bn]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.wc("VectorValues must only contain numeric values.");return xs(t.serializer,e)})}}}}}})(e,t);throw t.wc(`Unsupported field value: ${ae(e)}`)})(e,t)}function Jd(e,t){const n={};return fn(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(e,(e,r)=>{const s=Yd(r,t.Vc(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Zd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof me||e instanceof Od||e instanceof Cd||e instanceof Jh||e instanceof kd||e instanceof Pd)}function ef(e,t,n){if(!Zd(n)||!oe(n)){const r=ae(n);throw"an object"===r?t.wc(e+" a custom object"):t.wc(e+" "+r)}}function tf(e,t,n){if((t=(0,l.getModularInstance)(t))instanceof Nd)return t._internalPath;if("string"==typeof t)return rf(e,t);throw sf("Field path arguments must be of type string or ",e,!1,void 0,n)}const nf=new RegExp("[~\\*/\\[\\]]");function rf(e,t,n){if(t.search(nf)>=0)throw sf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nd(...t.split("."))._internalPath}catch(r){throw sf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sf(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new A(N.INVALID_ARGUMENT,a+e+u)}function of(e,t){return e.some(e=>e.isEqual(t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class af{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new uf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uf extends af{data(){return super.data()}}function cf(e,t){return"string"==typeof t?rf(e,t):t instanceof Nd?t._internalPath:t._delegate._internalPath}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function lf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new A(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class df extends hf{}function ff(e,t,...n){let r=[];t instanceof hf&&r.push(t),r=r.concat(n),(function(e){const t=e.filter(e=>e instanceof pf).length,n=e.filter(e=>e instanceof mf).length;if(t>1||t>0&&n>0)throw new A(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(r);for(const t of r)e=t._apply(e);return e}class mf extends df{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new mf(e,t,n)}_apply(e){const t=this._parse(e);return Pf(e._query,t),new Yh(e.firestore,e.converter,rs(e._query,t))}_parse(e){const t=Ud(e.firestore),n=(function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new A(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Of(o,i);const t=[];for(const n of o)t.push(kf(r,e,n));a={arrayValue:{values:t}}}else a=kf(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Of(o,i),a=Xd(n,t,o,"in"===i||"not-in"===i);return _r.create(s,i,a)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function gf(e,t,n){const r=t,s=cf("where",e);return mf._create(s,r,n)}class pf extends hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pf(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Tr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:((function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Pf(n,e),n=rs(n,e)})(e._query,t),new Yh(e.firestore,e.converter,rs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function yf(...e){return e.forEach(e=>Ff("or",e)),pf._create("or",e)}function wf(...e){return e.forEach(e=>Ff("and",e)),pf._create("and",e)}class vf extends df{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vf(e,t)}_apply(e){const t=(function(e,t,n){if(null!==e.startAt)throw new A(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new A(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(t,n)})(e._query,this._field,this._direction);return new Yh(e.firestore,e.converter,(function(e,t){const n=e.explicitOrderBy.concat([t]);return new Wr(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)})(e._query,t))}}function bf(e,t="asc"){const n=t,r=cf("orderBy",e);return vf._create(r,n)}class If extends df{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new If(e,t,n)}_apply(e){return new Yh(e.firestore,e.converter,ss(e._query,this._limit,this._limitType))}}function _f(e){return ce("limit",e),If._create("limit",e,"F")}function Tf(e){return ce("limitToLast",e),If._create("limitToLast",e,"L")}class Ef extends df{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ef(e,t,n)}_apply(e){const t=Af(e,this.type,this._docOrFields,this._inclusive);return new Yh(e.firestore,e.converter,(function(e,t){return new Wr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)})(e._query,t))}}function Sf(...e){return Ef._create("startAt",e,!0)}function xf(...e){return Ef._create("startAfter",e,!1)}class Df extends df{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Df(e,t,n)}_apply(e){const t=Af(e,this.type,this._docOrFields,this._inclusive);return new Yh(e.firestore,e.converter,(function(e,t){return new Wr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)})(e._query,t))}}function Cf(...e){return Df._create("endBefore",e,!1)}function Nf(...e){return Df._create("endAt",e,!0)}function Af(e,t,n,r){if(n[0]=(0,l.getModularInstance)(n[0]),n[0]instanceof af)return(function(e,t,n,r,s){if(!r)throw new A(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const n of Zr(e))if(n.field.isKeyField())i.push(Zn(t,r.key));else{const e=r.data.field(n.field);if(On(e))throw new A(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new A(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new pr(i,s)})(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=Ud(e.firestore);return(function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new A(N.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let i=0;i<s.length;i++){const u=s[i];if(o[i].field.isKeyField()){if("string"!=typeof u)throw new A(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!Jr(e)&&-1!==u.indexOf("/"))throw new A(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);const n=e.path.child(J.fromString(u));if(!te.isDocumentKey(n))throw new A(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new te(n);a.push(Zn(t,s))}else{const e=Xd(n,r,u);a.push(e)}}return new pr(a,i)})(e._query,e.firestore._databaseId,s,t,n,r)}}function kf(e,t,n){if("string"==typeof(n=(0,l.getModularInstance)(n))){if(""===n)throw new A(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jr(t)&&-1!==n.indexOf("/"))throw new A(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(J.fromString(n));if(!te.isDocumentKey(r))throw new A(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zn(e,new te(r))}if(n instanceof Jh)return Zn(e,n._key);throw new A(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ae(n)}.`)}function Of(e,t){if(!Array.isArray(e)||0===e.length)throw new A(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pf(e,t){const n=(function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null})(e.filters,(function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(null!==n)throw n===t.op?new A(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new A(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ff(e,t){if(!(t instanceof mf||t instanceof pf))throw new A(N.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Rf{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw E(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return hn(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const s=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Bn].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>xn(e.doubleValue));return new Pd(s)}convertGeoPoint(e){return new Od(xn(e.latitude),xn(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pn(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fn(e));default:return null}}convertTimestamp(e){const t=Sn(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);x(mo(n),9688,{name:e});const r=new Mn(n.get(1),n.get(3)),s=new te(n.popFirst(5));return r.isEqual(t)||I(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Vf(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Mf extends Rf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Jh(this.firestore,null,t)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Lf(e){return new xd("sum",tf("sum",e))}function qf(e){return new xd("avg",tf("average",e))}function Uf(){return new xd("count")}function jf(e,t){var n,r;return e instanceof xd&&t instanceof xd&&e.aggregateType===t.aggregateType&&(null===(n=e._internalFieldPath)||void 0===n?void 0:n.canonicalString())===(null===(r=t._internalFieldPath)||void 0===r?void 0:r.canonicalString())}function Bf(e,t){return sd(e.query,t.query)&&(0,l.deepEqual)(e.data(),t.data())}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const zf="NOT SUPPORTED";class $f{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gf extends af{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(cf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new A(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gf._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}function Kf(e,t,n){if(he(t,Gf._jsonSchema)){if(t.bundle===zf)throw new A(N.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=fc(e._databaseId),s=Uh(t.bundle,r),i=s.Ku(),o=new yl(s.getMetadata(),r);for(const e of i)o.Wa(e);const a=o.documents;if(1!==a.length)throw new A(N.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const u=Wi(r,a[0].document),c=new te(J.fromString(t.bundleName));return new Gf(e,new Mf(e),c,u,new $f(!1,!1),n||null)}}Gf._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gf._jsonSchema={type:le("string",Gf._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Qf extends Gf{data(e={}){return super.data(e)}}class Wf{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new $f(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Qf(this._firestore,this._userDataWriter,n.key,n,new $f(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new A(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Qf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new $f(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Qf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new $f(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Xf(t.type),doc:r,oldIndex:s,newIndex:i}})}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new A(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wf._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=z.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Hf(e,t,n){if(he(t,Wf._jsonSchema)){if(t.bundle===zf)throw new A(N.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=fc(e._databaseId),s=Uh(t.bundle,r),i=s.Ku(),o=new yl(s.getMetadata(),r);for(const e of i)o.Wa(e);if(1!==o.queries.length)throw new A(N.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=So(o.queries[0].bundledQuery),u=o.documents;let c=new tl;u.map(e=>{const t=Wi(r,e.document);c=c.add(t)});const l=rl.fromInitialDocuments(a,c,Ts(),!1,!1),h=new Yh(e,n||null,a);return new Wf(e,new Mf(e),h,l)}}function Xf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E(61501,{type:e})}}function Yf(e,t){return e instanceof Gf&&t instanceof Gf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Wf&&t instanceof Wf&&e._firestore===t._firestore&&sd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Jf(e){e=ue(e,Jh);const t=ue(e.firestore,hd);return Ph(md(t),e._key).then(n=>fm(t,e,n))}Wf._jsonSchemaVersion="firestore/querySnapshot/1.0",Wf._jsonSchema={type:le("string",Wf._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class Zf extends Rf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Jh(this.firestore,null,t)}}function em(e){e=ue(e,Jh);const t=ue(e.firestore,hd),n=md(t),r=new Zf(t);return Oh(n,e._key).then(n=>new Gf(t,r,e._key,n,new $f(null!==n&&n.hasLocalMutations,!0),e.converter))}function tm(e){e=ue(e,Jh);const t=ue(e.firestore,hd);return Ph(md(t),e._key,{source:"server"}).then(n=>fm(t,e,n))}function nm(e){e=ue(e,Yh);const t=ue(e.firestore,hd),n=md(t),r=new Zf(t);return lf(e._query),Rh(n,e._query).then(n=>new Wf(t,r,e,n))}function rm(e){e=ue(e,Yh);const t=ue(e.firestore,hd),n=md(t),r=new Zf(t);return Fh(n,e._query).then(n=>new Wf(t,r,e,n))}function sm(e){e=ue(e,Yh);const t=ue(e.firestore,hd),n=md(t),r=new Zf(t);return Rh(n,e._query,{source:"server"}).then(n=>new Wf(t,r,e,n))}function im(e,t,n){e=ue(e,Jh);const r=ue(e.firestore,hd),s=Vf(e.converter,t,n);return dm(r,[jd(Ud(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,$s.none())])}function om(e,t,n,...r){e=ue(e,Jh);const s=ue(e.firestore,hd),i=Ud(s);let o;return o="string"==typeof(t=(0,l.getModularInstance)(t))||t instanceof Nd?Hd(i,"updateDoc",e._key,t,n,r):Wd(i,"updateDoc",e._key,t),dm(s,[o.toMutation(e._key,$s.exists(!0))])}function am(e){return dm(ue(e.firestore,hd),[new ri(e._key,$s.none())])}function um(e,t){const n=ue(e.firestore,hd),r=nd(e),s=Vf(e.converter,t);return dm(n,[jd(Ud(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,$s.exists(!1))]).then(()=>r)}function cm(e,...t){var n,r,s;e=(0,l.getModularInstance)(e);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||ud(t[o])||(i=t[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ud(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let u,c,h;if(e instanceof Jh)c=ue(e.firestore,hd),h=Xr(e._key.path),u={next:n=>{t[o]&&t[o](fm(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=ue(e,Yh);c=ue(n.firestore,hd),h=n._query;const r=new Zf(c);u={next:e=>{t[o]&&t[o](new Wf(c,r,n,e))},error:t[o+1],complete:t[o+2]},lf(e._query)}return(function(e,t,n,r){const s=new fh(r),i=new ml(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>al(await Nh(e),i)),()=>{s.Ou(),e.asyncQueue.enqueueAndForget(async()=>ul(await Nh(e),i))}})(md(c),h,a,u)}function lm(e,t,...n){const r=(0,l.getModularInstance)(e),s=(function(e){const t={bundle:"",bundleName:"",bundleSource:""},n=["bundle","bundleName","bundleSource"];for(const r of n){if(!(r in e)){t.error=`snapshotJson missing required field: ${r}`;break}const n=e[r];if("string"!=typeof n){t.error=`snapshotJson field '${r}' must be a string.`;break}if(0===n.length){t.error=`snapshotJson field '${r}' cannot be an empty string.`;break}"bundle"===r?t.bundle=n:"bundleName"===r?t.bundleName=n:"bundleSource"===r&&(t.bundleSource=n)}return t})(t);if(s.error)throw new A(N.INVALID_ARGUMENT,s.error);let i,o=0;if("object"!=typeof n[o]||ud(n[o])||(i=n[o++]),"QuerySnapshot"===s.bundleSource){let e=null;if("object"==typeof n[o]&&ud(n[o])){const t=n[o++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:n[o++],error:n[o++],complete:n[o++]};return(function(e,t,n,r,s){let i,o=!1;return Ed(e,t.bundle).then(()=>Sd(e,t.bundleName)).then(e=>{e&&!o&&(s&&e.withConverter(s),i=cm(e,n||{},r))}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,i&&i())}
/**
      * @license
      * Copyright 2022 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */})(r,s,i,e,n[o])}if("DocumentSnapshot"===s.bundleSource){let e=null;if("object"==typeof n[o]&&ud(n[o])){const t=n[o++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:n[o++],error:n[o++],complete:n[o++]};return(function(e,t,n,r,s){let i,o=!1;return Ed(e,t.bundle).then(()=>{if(!o){const o=new Jh(e,s||null,te.fromPath(t.bundleName));i=cm(o,n||{},r)}}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,i&&i())}})(r,s,i,e,n[o])}throw new A(N.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function hm(e,t){return Mh(md(e=ue(e,hd)),ud(t)?t:{next:t})}function dm(e,t){return(function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget(async()=>Ol(await Dh(e),t,n)),n.promise})(md(e),t)}function fm(e,t,n){const r=n.docs.get(t._key),s=new Zf(e);return new Gf(e,s,t._key,r,new $f(n.hasPendingWrites,n.fromCache),t.converter)}function mm(e){return gm(e,{count:Uf()})}function gm(e,t){const n=ue(e.firestore,hd),r=md(n),s=dn(t,(e,t)=>new ui(t,e.aggregateType,e._internalFieldPath));return Vh(r,e._query,s).then(t=>(function(e,t,n){const r=new Zf(e);return new Dd(t,r,n)}
/**
    * @license
    * Copyright 2023 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(n,e,t))}class pm{constructor(e){this.kind="memory",this._onlineComponentProvider=hh.provider,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new uh(void 0)}}toJSON(){return{kind:this.kind}}}class ym{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=xm(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class wm{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ah.provider}toJSON(){return{kind:this.kind}}}class vm{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new uh(e)}}toJSON(){return{kind:this.kind}}}function bm(){return new wm}function Im(e){return new vm(null==e?void 0:e.cacheSizeBytes)}function _m(e){return new pm(e)}function Tm(e){return new ym(e)}class Em{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hh.provider,this._offlineComponentProvider={build:t=>new ch(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class Sm{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hh.provider,this._offlineComponentProvider={build:t=>new lh(t,null==e?void 0:e.cacheSizeBytes)}}}function xm(e){return new Em(null==e?void 0:e.forceOwnership)}function Dm(){return new Sm}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Cm={maxAttempts:5};
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Nm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ud(e)}set(e,t,n){this._verifyNotCommitted();const r=Am(e,this._firestore),s=Vf(r.converter,t,n),i=jd(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,$s.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=Am(e,this._firestore);let i;return i="string"==typeof(t=(0,l.getModularInstance)(t))||t instanceof Nd?Hd(this._dataReader,"WriteBatch.update",s._key,t,n,r):Wd(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,$s.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Am(e,this._firestore);return this._mutations=this._mutations.concat(new ri(t._key,$s.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Am(e,t){if((e=(0,l.getModularInstance)(e)).firestore!==t)throw new A(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class km{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ud(e)}get(e){const t=Am(e,this._firestore),n=new Mf(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return E(24041);const r=e[0];if(r.isFoundDocument())return new af(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new af(this._firestore,n,t._key,null,t.converter);throw E(18433,{doc:r})})}set(e,t,n){const r=Am(e,this._firestore),s=Vf(r.converter,t,n),i=jd(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=Am(e,this._firestore);let i;return i="string"==typeof(t=(0,l.getModularInstance)(t))||t instanceof Nd?Hd(this._dataReader,"Transaction.update",s._key,t,n,r):Wd(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=Am(e,this._firestore);return this._transaction.delete(t._key),this}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Om extends km{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Am(e,this._firestore),n=new Zf(this._firestore);return super.get(e).then(e=>new Gf(this._firestore,n,t._key,e._document,new $f(!1,!1),t.converter))}}function Pm(e,t,n){e=ue(e,hd);const r=Object.assign(Object.assign({},Cm),n);return(function(e){if(e.maxAttempts<1)throw new A(N.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(e,t,n){const r=new k;return e.asyncQueue.enqueueAndForget(async()=>{const s=await Ch(e);new yh(e.asyncQueue,s,n,t,r).zu()}),r.promise})(md(e),n=>t(new Om(e,n)),r)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Fm(){return new Bd("deleteField")}function Rm(){return new $d("serverTimestamp")}function Vm(...e){return new Gd("arrayUnion",e)}function Mm(...e){return new Kd("arrayRemove",e)}function Lm(e){return new Qd("increment",e)}function qm(e){return new Pd(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Um(e){return md(e=ue(e,hd)),new Nm(e,t=>dm(e,t))
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}function jm(e,t){const n=md(e=ue(e,hd));if(!n._uninitializedComponentsProvider||"memory"===n._uninitializedComponentsProvider._offline.kind)return _("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(e){const t="string"==typeof e?(function(e){try{return JSON.parse(e)}catch(e){throw new A(N.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}})(e):e,n=[];if(Array.isArray(t.indexes))for(const e of t.indexes){const t=Bm(e,"collectionGroup"),r=[];if(Array.isArray(e.fields))for(const t of e.fields){const e=rf("setIndexConfiguration",Bm(t,"fieldPath"));"CONTAINS"===t.arrayConfig?r.push(new Ie(e,2)):"ASCENDING"===t.order?r.push(new Ie(e,0)):"DESCENDING"===t.order&&r.push(new Ie(e,1))}n.push(new ye(ye.UNKNOWN_ID,t,r,Te.empty()))}return n})(t);return jh(n,r)}function Bm(e,t){if("string"!=typeof e[t])throw new A(N.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class zm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function $m(e){var t;e=ue(e,hd);const n=Hm.get(e);if(n)return n;if("persistent"!==(null===(t=md(e)._uninitializedComponentsProvider)||void 0===t?void 0:t._offline.kind))return null;const r=new zm(e);return Hm.set(e,r),r}function Gm(e){Wm(e,!0)}function Km(e){Wm(e,!1)}function Qm(e){zh(md(e._firestore)).then(e=>b("deleting all persistent cache indexes succeeded")).catch(e=>_("deleting all persistent cache indexes failed",e))}function Wm(e,t){Bh(md(e._firestore),t).then(e=>b(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>_(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Hm=new WeakMap;
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Xm(e){var t;const n=null===(t=md(ue(e.firestore,hd))._onlineComponents)||void 0===t?void 0:t.datastore.serializer;return void 0===n?null:to(n,es(e._query)).Vt}function Ym(e,t){var n;const r=dn(t,(e,t)=>new ui(t,e.aggregateType,e._internalFieldPath)),s=null===(n=md(ue(e.firestore,hd))._onlineComponents)||void 0===n?void 0:n.datastore.serializer;return void 0===s?null:no(s,ts(e._query),r,!0).request}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Jm{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Zm.instance.onExistenceFilterMismatch(e)}}class Zm{constructor(){this.Fc=new Map}static get instance(){return eg||(eg=new Zm,(function(e){if(mi)throw new Error("a TestingHooksSpi instance is already set");mi=e})(eg)),eg}ct(e){this.Fc.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Fc;return n.set(t,e),()=>n.delete(t)}}let eg=null;!(function(e,t=!0){!(function(e){p=e})(a.SDK_VERSION),(0,a._registerComponent)(new u.Component("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new hd(new R(e.getProvider("auth-internal")),new q(s,e.getProvider("app-check-internal")),(function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(e.options.projectId,t)})(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(f,m,e),(0,a.registerVersion)(f,m,"esm2017")})()},862,[858,861,860,859,863,864]);
__d(function(_g,_r,i,_a,_m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"Integer",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"Md5",{enumerable:!0,get:function(){return r}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return o}});var t,r,e='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:void 0!==_g?_g:'undefined'!=typeof self?self:{},o={};(function(){var e;
/** @license
           Copyright The Closure Library Authors.
           SPDX-License-Identifier: Apache-2.0
           */function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function h(t,r,e){e||(e=0);var o=Array(16);if("string"==typeof r)for(var n=0;16>n;++n)o[n]=r.charCodeAt(e++)|r.charCodeAt(e++)<<8|r.charCodeAt(e++)<<16|r.charCodeAt(e++)<<24;else for(n=0;16>n;++n)o[n]=r[e++]|r[e++]<<8|r[e++]<<16|r[e++]<<24;r=t.g[0],e=t.g[1],n=t.g[2];var h=t.g[3],f=r+(h^e&(n^h))+o[0]+3614090360&4294967295;f=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=(e=(n=(h=(r=e+(f<<7&4294967295|f>>>25))+((f=h+(n^r&(e^n))+o[1]+3905402710&4294967295)<<12&4294967295|f>>>20))+((f=n+(e^h&(r^e))+o[2]+606105819&4294967295)<<17&4294967295|f>>>15))+((f=e+(r^n&(h^r))+o[3]+3250441966&4294967295)<<22&4294967295|f>>>10))+((f=r+(h^e&(n^h))+o[4]+4118548399&4294967295)<<7&4294967295|f>>>25))+((f=h+(n^r&(e^n))+o[5]+1200080426&4294967295)<<12&4294967295|f>>>20))+((f=n+(e^h&(r^e))+o[6]+2821735955&4294967295)<<17&4294967295|f>>>15))+((f=e+(r^n&(h^r))+o[7]+4249261313&4294967295)<<22&4294967295|f>>>10))+((f=r+(h^e&(n^h))+o[8]+1770035416&4294967295)<<7&4294967295|f>>>25))+((f=h+(n^r&(e^n))+o[9]+2336552879&4294967295)<<12&4294967295|f>>>20))+((f=n+(e^h&(r^e))+o[10]+4294925233&4294967295)<<17&4294967295|f>>>15))+((f=e+(r^n&(h^r))+o[11]+2304563134&4294967295)<<22&4294967295|f>>>10))+((f=r+(h^e&(n^h))+o[12]+1804603682&4294967295)<<7&4294967295|f>>>25))+((f=h+(n^r&(e^n))+o[13]+4254626195&4294967295)<<12&4294967295|f>>>20))+((f=n+(e^h&(r^e))+o[14]+2792965006&4294967295)<<17&4294967295|f>>>15))+((f=e+(r^n&(h^r))+o[15]+1236535329&4294967295)<<22&4294967295|f>>>10))+((f=r+(n^h&(e^n))+o[1]+4129170786&4294967295)<<5&4294967295|f>>>27))+((f=h+(e^n&(r^e))+o[6]+3225465664&4294967295)<<9&4294967295|f>>>23))+((f=n+(r^e&(h^r))+o[11]+643717713&4294967295)<<14&4294967295|f>>>18))+((f=e+(h^r&(n^h))+o[0]+3921069994&4294967295)<<20&4294967295|f>>>12))+((f=r+(n^h&(e^n))+o[5]+3593408605&4294967295)<<5&4294967295|f>>>27))+((f=h+(e^n&(r^e))+o[10]+38016083&4294967295)<<9&4294967295|f>>>23))+((f=n+(r^e&(h^r))+o[15]+3634488961&4294967295)<<14&4294967295|f>>>18))+((f=e+(h^r&(n^h))+o[4]+3889429448&4294967295)<<20&4294967295|f>>>12))+((f=r+(n^h&(e^n))+o[9]+568446438&4294967295)<<5&4294967295|f>>>27))+((f=h+(e^n&(r^e))+o[14]+3275163606&4294967295)<<9&4294967295|f>>>23))+((f=n+(r^e&(h^r))+o[3]+4107603335&4294967295)<<14&4294967295|f>>>18))+((f=e+(h^r&(n^h))+o[8]+1163531501&4294967295)<<20&4294967295|f>>>12))+((f=r+(n^h&(e^n))+o[13]+2850285829&4294967295)<<5&4294967295|f>>>27))+((f=h+(e^n&(r^e))+o[2]+4243563512&4294967295)<<9&4294967295|f>>>23))+((f=n+(r^e&(h^r))+o[7]+1735328473&4294967295)<<14&4294967295|f>>>18))+((f=e+(h^r&(n^h))+o[12]+2368359562&4294967295)<<20&4294967295|f>>>12))+((f=r+(e^n^h)+o[5]+4294588738&4294967295)<<4&4294967295|f>>>28))+((f=h+(r^e^n)+o[8]+2272392833&4294967295)<<11&4294967295|f>>>21))+((f=n+(h^r^e)+o[11]+1839030562&4294967295)<<16&4294967295|f>>>16))+((f=e+(n^h^r)+o[14]+4259657740&4294967295)<<23&4294967295|f>>>9))+((f=r+(e^n^h)+o[1]+2763975236&4294967295)<<4&4294967295|f>>>28))+((f=h+(r^e^n)+o[4]+1272893353&4294967295)<<11&4294967295|f>>>21))+((f=n+(h^r^e)+o[7]+4139469664&4294967295)<<16&4294967295|f>>>16))+((f=e+(n^h^r)+o[10]+3200236656&4294967295)<<23&4294967295|f>>>9))+((f=r+(e^n^h)+o[13]+681279174&4294967295)<<4&4294967295|f>>>28))+((f=h+(r^e^n)+o[0]+3936430074&4294967295)<<11&4294967295|f>>>21))+((f=n+(h^r^e)+o[3]+3572445317&4294967295)<<16&4294967295|f>>>16))+((f=e+(n^h^r)+o[6]+76029189&4294967295)<<23&4294967295|f>>>9))+((f=r+(e^n^h)+o[9]+3654602809&4294967295)<<4&4294967295|f>>>28))+((f=h+(r^e^n)+o[12]+3873151461&4294967295)<<11&4294967295|f>>>21))+((f=n+(h^r^e)+o[15]+530742520&4294967295)<<16&4294967295|f>>>16))+((f=e+(n^h^r)+o[2]+3299628645&4294967295)<<23&4294967295|f>>>9))+((f=r+(n^(e|~h))+o[0]+4096336452&4294967295)<<6&4294967295|f>>>26))+((f=h+(e^(r|~n))+o[7]+1126891415&4294967295)<<10&4294967295|f>>>22))+((f=n+(r^(h|~e))+o[14]+2878612391&4294967295)<<15&4294967295|f>>>17))+((f=e+(h^(n|~r))+o[5]+4237533241&4294967295)<<21&4294967295|f>>>11))+((f=r+(n^(e|~h))+o[12]+1700485571&4294967295)<<6&4294967295|f>>>26))+((f=h+(e^(r|~n))+o[3]+2399980690&4294967295)<<10&4294967295|f>>>22))+((f=n+(r^(h|~e))+o[10]+4293915773&4294967295)<<15&4294967295|f>>>17))+((f=e+(h^(n|~r))+o[1]+2240044497&4294967295)<<21&4294967295|f>>>11))+((f=r+(n^(e|~h))+o[8]+1873313359&4294967295)<<6&4294967295|f>>>26))+((f=h+(e^(r|~n))+o[15]+4264355552&4294967295)<<10&4294967295|f>>>22))+((f=n+(r^(h|~e))+o[6]+2734768916&4294967295)<<15&4294967295|f>>>17))+((f=e+(h^(n|~r))+o[13]+1309151649&4294967295)<<21&4294967295|f>>>11))+((h=(r=e+((f=r+(n^(e|~h))+o[4]+4149444226&4294967295)<<6&4294967295|f>>>26))+((f=h+(e^(r|~n))+o[11]+3174756917&4294967295)<<10&4294967295|f>>>22))^((n=h+((f=n+(r^(h|~e))+o[2]+718787259&4294967295)<<15&4294967295|f>>>17))|~r))+o[9]+3951481745&4294967295,t.g[0]=t.g[0]+r&4294967295,t.g[1]=t.g[1]+(n+(f<<21&4294967295|f>>>11))&4294967295,t.g[2]=t.g[2]+n&4294967295,t.g[3]=t.g[3]+h&4294967295}function f(t,r){var e=u;return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=r(t)}function s(t,r){this.h=r;for(var e=[],o=!0,n=t.length-1;0<=n;n--){var h=0|t[n];o&&h==r||(e[n]=h,o=!1)}this.g=e}!(function(t,r){function e(){}e.prototype=r.prototype,t.D=r.prototype,t.prototype=new e,t.prototype.constructor=t,t.C=function(t,e,o){for(var n=Array(arguments.length-2),h=2;h<arguments.length;h++)n[h-2]=arguments[h];return r.prototype[e].apply(t,n)}})(n,function(){this.blockSize=-1}),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},n.prototype.u=function(t,r){void 0===r&&(r=t.length);for(var e=r-this.blockSize,o=this.B,n=this.h,f=0;f<r;){if(0==n)for(;f<=e;)h(this,t,f),f+=this.blockSize;if("string"==typeof t){for(;f<r;)if(o[n++]=t.charCodeAt(f++),n==this.blockSize){h(this,o),n=0;break}}else for(;f<r;)if(o[n++]=t[f++],n==this.blockSize){h(this,o),n=0;break}}this.h=n,this.o+=r},n.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var r=1;r<t.length-8;++r)t[r]=0;var e=8*this.o;for(r=t.length-8;r<t.length;++r)t[r]=255&e,e/=256;for(this.u(t),t=Array(16),r=e=0;4>r;++r)for(var o=0;32>o;o+=8)t[e++]=this.g[r]>>>o&255;return t};var u={};function a(t){return-128<=t&&128>t?f(t,function(t){return new s([0|t],0>t?-1:0)}):new s([0|t],0>t?-1:0)}function g(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return v(g(-t));for(var r=[],e=1,o=0;t>=e;o++)r[o]=t/e|0,e*=4294967296;return new s(r,0)}var p=a(0),l=a(1),c=a(16777216);function d(t){if(0!=t.h)return!1;for(var r=0;r<t.g.length;r++)if(0!=t.g[r])return!1;return!0}function y(t){return-1==t.h}function v(t){for(var r=t.g.length,e=[],o=0;o<r;o++)e[o]=~t.g[o];return new s(e,~t.h).add(l)}function w(t,r){return t.add(v(r))}function b(t,r){for(;(65535&t[r])!=t[r];)t[r+1]+=t[r]>>>16,t[r]&=65535,r++}function m(t,r){this.g=t,this.h=r}function M(t,r){if(d(r))throw Error("division by zero");if(d(t))return new m(p,p);if(y(t))return r=M(v(t),r),new m(v(r.g),v(r.h));if(y(r))return r=M(t,v(r)),new m(v(r.g),r.h);if(30<t.g.length){if(y(t)||y(r))throw Error("slowDivide_ only works with positive integers.");for(var e=l,o=r;0>=o.l(t);)e=j(e),o=j(o);var n=S(e,1),h=S(o,1);for(o=S(o,2),e=S(e,2);!d(o);){var f=h.add(o);0>=f.l(t)&&(n=n.add(e),h=f),o=S(o,1),e=S(e,1)}return r=w(t,n.j(r)),new m(n,r)}for(n=p;0<=t.l(r);){for(e=Math.max(1,Math.floor(t.m()/r.m())),o=48>=(o=Math.ceil(Math.log(e)/Math.LN2))?1:Math.pow(2,o-48),f=(h=g(e)).j(r);y(f)||0<f.l(t);)f=(h=g(e-=o)).j(r);d(h)&&(h=l),n=n.add(h),t=w(t,f)}return new m(n,t)}function j(t){for(var r=t.g.length+1,e=[],o=0;o<r;o++)e[o]=t.i(o)<<1|t.i(o-1)>>>31;return new s(e,t.h)}function S(t,r){var e=r>>5;r%=32;for(var o=t.g.length-e,n=[],h=0;h<o;h++)n[h]=0<r?t.i(h+e)>>>r|t.i(h+e+1)<<32-r:t.i(h+e);return new s(n,t.h)}(e=s.prototype).m=function(){if(y(this))return-v(this).m();for(var t=0,r=1,e=0;e<this.g.length;e++){var o=this.i(e);t+=(0<=o?o:4294967296+o)*r,r*=4294967296}return t},e.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(d(this))return"0";if(y(this))return"-"+v(this).toString(t);for(var r=g(Math.pow(t,6)),e=this,o="";;){var n=M(e,r).g,h=((0<(e=w(e,n.j(r))).g.length?e.g[0]:e.h)>>>0).toString(t);if(d(e=n))return h+o;for(;6>h.length;)h="0"+h;o=h+o}},e.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},e.l=function(t){return y(t=w(this,t))?-1:d(t)?0:1},e.abs=function(){return y(this)?v(this):this},e.add=function(t){for(var r=Math.max(this.g.length,t.g.length),e=[],o=0,n=0;n<=r;n++){var h=o+(65535&this.i(n))+(65535&t.i(n)),f=(h>>>16)+(this.i(n)>>>16)+(t.i(n)>>>16);o=f>>>16,h&=65535,f&=65535,e[n]=f<<16|h}return new s(e,-2147483648&e[e.length-1]?-1:0)},e.j=function(t){if(d(this)||d(t))return p;if(y(this))return y(t)?v(this).j(v(t)):v(v(this).j(t));if(y(t))return v(this.j(v(t)));if(0>this.l(c)&&0>t.l(c))return g(this.m()*t.m());for(var r=this.g.length+t.g.length,e=[],o=0;o<2*r;o++)e[o]=0;for(o=0;o<this.g.length;o++)for(var n=0;n<t.g.length;n++){var h=this.i(o)>>>16,f=65535&this.i(o),u=t.i(n)>>>16,a=65535&t.i(n);e[2*o+2*n]+=f*a,b(e,2*o+2*n),e[2*o+2*n+1]+=h*a,b(e,2*o+2*n+1),e[2*o+2*n+1]+=f*u,b(e,2*o+2*n+1),e[2*o+2*n+2]+=h*u,b(e,2*o+2*n+2)}for(o=0;o<r;o++)e[o]=e[2*o+1]<<16|e[2*o];for(o=r;o<2*r;o++)e[o]=0;return new s(e,0)},e.A=function(t){return M(this,t).h},e.and=function(t){for(var r=Math.max(this.g.length,t.g.length),e=[],o=0;o<r;o++)e[o]=this.i(o)&t.i(o);return new s(e,this.h&t.h)},e.or=function(t){for(var r=Math.max(this.g.length,t.g.length),e=[],o=0;o<r;o++)e[o]=this.i(o)|t.i(o);return new s(e,this.h|t.h)},e.xor=function(t){for(var r=Math.max(this.g.length,t.g.length),e=[],o=0;o<r;o++)e[o]=this.i(o)^t.i(o);return new s(e,this.h^t.h)},n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,r=o.Md5=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=g,s.fromString=function t(r,e){if(0==r.length)throw Error("number format error: empty string");if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if("-"==r.charAt(0))return v(t(r.substring(1),e));if(0<=r.indexOf("-"))throw Error('number format error: interior "-" character');for(var o=g(Math.pow(e,8)),n=p,h=0;h<r.length;h+=8){var f=Math.min(8,r.length-h),s=parseInt(r.substring(h,h+f),e);8>f?(f=g(Math.pow(e,f)),n=n.j(f).add(g(s))):n=(n=n.j(o)).add(g(s))}return n},t=o.Integer=s}).apply(void 0!==e?e:'undefined'!=typeof self?self:'undefined'!=typeof window?window:{})},863,[]);
__d(function(_g,_r,i,_a,_m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"ErrorCode",{enumerable:!0,get:function(){return r}}),Object.defineProperty(_e,"Event",{enumerable:!0,get:function(){return h}}),Object.defineProperty(_e,"EventType",{enumerable:!0,get:function(){return s}}),Object.defineProperty(_e,"FetchXmlHttpFactory",{enumerable:!0,get:function(){return e}}),Object.defineProperty(_e,"Stat",{enumerable:!0,get:function(){return o}}),Object.defineProperty(_e,"WebChannel",{enumerable:!0,get:function(){return n}}),Object.defineProperty(_e,"XhrIo",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"createWebChannelTransport",{enumerable:!0,get:function(){return l}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"getStatEventTarget",{enumerable:!0,get:function(){return a}});var t,e,n,s,r,o,h,a,l,u='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:void 0!==_g?_g:'undefined'!=typeof self?self:{},c={};(function(){var f,g="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var p=(function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof u&&u];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")})(this);function d(t,e){t instanceof String&&(t+="");var n=0,s=!1,r={next:function(){if(!s&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return s=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}!(function(t,e){if(e)t:{var n=p;t=t.split(".");for(var s=0;s<t.length-1;s++){var r=t[s];if(!(r in n))break t;n=n[r]}(e=e(s=n[t=t[t.length-1]]))!=s&&null!=e&&g(n,t,{configurable:!0,writable:!0,value:e})}})("Array.prototype.values",function(t){return t||function(){return d(this,function(t,e){return e})}});
/** @license
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
        */
var y=y||{},v=this||self;function m(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function b(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function w(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return(S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:T).apply(null,arguments)}function j(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,s){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[n].apply(t,r)}}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function A(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(m(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let r=0;r<s;r++)t[e+r]=n[r]}else t.push(n)}}function O(t){return/^[\s\xa0]*$/.test(t)}function P(){var t=v.navigator;return t&&(t=t.userAgent)?t:""}function I(t){return I[" "](t),t}I[" "]=function(){};var R=!(-1==P().indexOf("Gecko")||-1!=P().toLowerCase().indexOf("webkit")&&-1==P().indexOf("Edge")||-1!=P().indexOf("Trident")||-1!=P().indexOf("MSIE")||-1!=P().indexOf("Edge"));function x(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<D.length;e++)n=D[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function H(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function X(t){v.setTimeout(()=>{throw t},0)}function k(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var B=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new F,t=>t.reset());class F{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let N,U=!1,K=new class{constructor(){this.h=this.g=null}add(t,e){const n=B.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},G=()=>{const t=v.Promise.resolve(void 0);N=()=>{t.then(Y)}};var Y=()=>{for(var t;t=k();){try{t.h.call(t.g)}catch(t){X(t)}var e=B;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}U=!1};function J(){this.s=this.s,this.C=this.C}function W(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},W.prototype.h=function(){this.defaultPrevented=!0};var q=(function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};v.addEventListener("test",t,e),v.removeEventListener("test",t,e)}catch(t){}return t})();function V(t,e){if(W.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(R){t:{try{I(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&V.aa.h.call(this)}}E(V,W);var z={2:"touch",3:"pen",4:"mouse"};V.prototype.h=function(){V.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),$=0;function Q(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++$,this.da=this.fa=!1}function tt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function et(t){this.src=t,this.g={},this.h=0}function nt(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],o=Array.prototype.indexOf.call(r,e,void 0);(s=0<=o)&&Array.prototype.splice.call(r,o,1),s&&(tt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function it(t,e,n,s){for(var r=0;r<t.length;++r){var o=t[r];if(!o.da&&o.listener==e&&o.capture==!!n&&o.ha==s)return r}return-1}et.prototype.add=function(t,e,n,s,r){var o=t.toString();(t=this.g[o])||(t=this.g[o]=[],this.h++);var h=it(t,e,s,r);return-1<h?(e=t[h],n||(e.fa=!1)):((e=new Q(e,this.src,o,!!s,r)).fa=n,t.push(e)),e};var st="closure_lm_"+(1e6*Math.random()|0),rt={};function ot(t,e,n,s,r){if(s&&s.once)return lt(t,e,n,s,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)ot(t,e[o],n,s,r);return null}return n=yt(n),t&&t[Z]?t.K(e,n,b(s)?!!s.capture:!!s,r):ht(t,e,n,!1,s,r)}function ht(t,e,n,s,r,o){if(!e)throw Error("Invalid event type");var h=b(r)?!!r.capture:!!r,a=pt(t);if(a||(t[st]=a=new et(t)),(n=a.add(e,n,s,h,o)).proxy)return n;if(s=at(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)q||(r=h),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ft(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function at(){const t=gt;return function e(n){return t.call(e.src,e.listener,n)}}function lt(t,e,n,s,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,s,r);return null}return n=yt(n),t&&t[Z]?t.L(e,n,b(s)?!!s.capture:!!s,r):ht(t,e,n,!0,s,r)}function ut(t,e,n,s,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)ut(t,e[o],n,s,r);else s=b(s)?!!s.capture:!!s,n=yt(n),t&&t[Z]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=it(o=t.g[e],n,s,r))&&(tt(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=pt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=it(e,n,s,r)),(n=-1<t?e[t]:null)&&ct(n))}function ct(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[Z])nt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ft(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=pt(e))?(nt(n,t),0==n.h&&(n.src=null,e[st]=null)):tt(t)}}}function ft(t){return t in rt?rt[t]:rt[t]="on"+t}function gt(t,e){if(t.da)t=!0;else{e=new V(e,this);var n=t.listener,s=t.ha||t.src;t.fa&&ct(t),t=n.call(s,e)}return t}function pt(t){return(t=t[st])instanceof et?t:null}var dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function yt(t){return"function"==typeof t?t:(t[dt]||(t[dt]=function(e){return t.handleEvent(e)}),t[dt])}function vt(){J.call(this),this.i=new et(this),this.M=this,this.F=null}function mt(t,e){var n,s=t.F;if(s)for(n=[];s;s=s.F)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new W(e,t);else if(e instanceof W)e.target=e.target||t;else{var r=e;L(e=new W(s,t),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var h=e.g=n[o];r=bt(h,s,!0,e)&&r}if(r=bt(h=e.g=t,s,!0,e)&&r,r=bt(h,s,!1,e)&&r,n)for(o=0;o<n.length;o++)r=bt(h=e.g=n[o],s,!1,e)&&r}function bt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var h=e[o];if(h&&!h.da&&h.capture==n){var a=h.listener,l=h.ha||h.src;h.fa&&nt(t.i,h),r=!1!==a.call(l,s)&&r}}return r&&!s.defaultPrevented}function wt(t,e,n){if("function"==typeof t)n&&(t=S(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function Tt(t){t.g=wt(()=>{t.g=null,t.i&&(t.i=!1,Tt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}E(vt,J),vt.prototype[Z]=!0,vt.prototype.removeEventListener=function(t,e,n,s){ut(this,t,e,n,s)},vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)tt(n[s]);delete e.g[t],e.h--}}this.F=null},vt.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},vt.prototype.L=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class St extends J{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){J.call(this),this.h=t,this.g={}}E(jt,J);var Et=[];function Ct(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&ct(t)},t),t.g={}}jt.prototype.N=function(){jt.aa.N.call(this),Ct(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var At=v.JSON.stringify,Ot=v.JSON.parse,Pt=class{stringify(t){return v.JSON.stringify(t,void 0)}parse(t){return v.JSON.parse(t,void 0)}};function It(){}function Rt(t){return t.h||(t.h=t.i())}function xt(){}It.prototype.h=null;var _t={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mt(){W.call(this,"d")}function Dt(){W.call(this,"c")}E(Mt,W),E(Dt,W);var Lt={},Ht=null;function Xt(){return Ht=Ht||new vt}function kt(t){W.call(this,Lt.La,t)}function Bt(t){const e=Xt();mt(e,new kt(e))}function Ft(t,e){W.call(this,Lt.STAT_EVENT,t),this.stat=e}function Nt(t){const e=Xt();mt(e,new Ft(e,t))}function Ut(t,e){W.call(this,Lt.Ma,t),this.size=e}function Kt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},e)}function Gt(){this.g=!0}function Yt(t,e,n,s,r,o){t.info(function(){if(t.g)if(o)for(var h="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");h=2<=f.length&&"type"==f[1]?h+(c+"=")+u+"&":h+(c+"=redacted&")}}else h=null;else h=o;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+h})}function Jt(t,e,n,s,r,o,h){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+o+" "+h})}function Wt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vt(t,n)+(s?" "+s:"")})}function qt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Vt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var h=1;h<r.length;h++)r[h]=""}}}return At(n)}catch(t){return e}}Lt.La="serverreachability",E(kt,W),Lt.STAT_EVENT="statevent",E(Ft,W),Lt.Ma="timingevent",E(Ut,W),Gt.prototype.xa=function(){this.g=!1},Gt.prototype.info=function(){};var zt,Zt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$t={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Qt(){}function te(t,e,n,s){this.j=t,this.i=e,this.l=n,this.R=s||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ee}function ee(){this.i=null,this.g="",this.h=!1}E(Qt,It),Qt.prototype.g=function(){return new XMLHttpRequest},Qt.prototype.i=function(){return{}},zt=new Qt;var ne={},ie={};function se(t,e,n){t.L=1,t.v=De(Pe(e)),t.m=n,t.P=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.A=Pe(t.v);var n=t.A,s=t.R;Array.isArray(s)||(s=[String(s)]),qe(n.i,"t",s),t.C=0,n=t.j.J,t.h=new ee,t.g=Nn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new St(S(t.Y,t,t.g),t.O)),e=t.U,n=t.g,s=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(Et[0]=r.toString()),r=Et);for(var o=0;o<r.length;o++){var h=ot(n,r[o],s||e.handleEvent,!1,e.h||e);if(!h)break;e.g[h.key]=h}e=t.H?M(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Bt(),Yt(t.i,t.u,t.A,t.l,t.R,t.m)}function oe(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ie:(n=Number(e.substring(n,s)),isNaN(n)?ne:(s+=1)+n>e.length?ie:(e=e.slice(s,s+n),t.C=s+n,e))}function ae(t){t.S=Date.now()+t.I,le(t,t.I)}function le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(S(t.ba,t),e)}function ue(t){t.B&&(v.clearTimeout(t.B),t.B=null)}function ce(t){0==t.j.G||t.J||Hn(t.j,t)}function fe(t){ue(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ge(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||me(n.h,t)))if(!t.K&&me(n.h,t)&&3==n.G){try{var s=n.Da.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ln(n),En(n)}_n(n),Nt(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(S(n.Za,n),6e3));if(1>=ve(n.h)&&n.ca){try{n.ca()}catch(t){}n.ca=void 0}}else kn(n,11)}else if((t.K||n.g==t)&&Ln(n),!O(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=u[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(s=1.5*c,n.L=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const t=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=s.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(be(o,o.h),o.h=null))}if(s.D){const t=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.ya=t,Me(s.I,s.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var h=t;if((s=n).qa=Fn(s,s.J?s.ia:null,s.W),h.K){we(s.h,h);var a=h,l=s.L;l&&(a.I=l),a.B&&(ue(a),ae(a)),s.g=h}else xn(s);0<n.i.length&&An(n)}else"stop"!=u[0]&&"close"!=u[0]||kn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?kn(n,7):jn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Bt()}catch(t){}}te.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==mn(t)?e.j():this.Y(t)},te.prototype.Y=function(t){try{if(t==this.g)t:{const f=mn(this.g);var e=this.g.Ba();this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=f||7==e||Bt(),ue(this);var n=this.g.Z();this.X=n;e:if(oe(this)){var s=bn(this.g);t="";var r=s.length,o=4==mn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){fe(this),ce(this);var h="";break e}this.h.i=new v.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:!(o&&e==r-1)});s.length=0,this.h.g+=t,this.C=0,h=this.h.g}else h=this.g.oa();if(this.o=200==n,Jt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,Nt(12),fe(this),ce(this);break t}Wt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<h.length;){if(t=he(this,h),t==ie){4==f&&(this.s=4,Nt(14),n=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}if(t==ne){this.s=4,Nt(15),Wt(this.i,this.l,h,"[Invalid Chunk]"),n=!1;break}Wt(this.i,this.l,t,null),ge(this,t)}if(oe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=h.length||this.h.h||(this.s=1,Nt(16),n=!1),this.o=this.o&&n,n){if(0<h.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Mn(c),c.M=!0,Nt(11))}}else Wt(this.i,this.l,h,"[Invalid Chunked Response]"),fe(this),ce(this)}else Wt(this.i,this.l,h,null),ge(this,h);4==f&&fe(this),this.o&&!this.J&&(4==f?Hn(this.j,this):(this.o=!1,ae(this)))}else wn(this.g),400==n&&0<h.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),fe(this),ce(this)}}}catch(t){}},te.prototype.cancel=function(){this.J=!0,fe(this)},te.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(qt(this.i,this.A),2!=this.L&&(Bt(),Nt(17)),fe(this),this.s=2,ce(this)):le(this,this.S-t)};var pe=class{constructor(t,e){this.g=t,this.map=e}};function de(t){this.l=t||10,v.PerformanceNavigationTiming?t=0<(t=v.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(v.chrome&&v.chrome.loadTimes&&v.chrome.loadTimes()&&v.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ye(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ve(t){return t.h?1:t.g?t.g.size:0}function me(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function be(t,e){t.g?t.g.add(e):t.h=e}function we(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function Se(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(m(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function je(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(m(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(m(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=je(t),s=Se(t),r=s.length,o=0;o<r;o++)e.call(void 0,s[o],n&&n[o],t)}de.prototype.cancel=function(){if(this.i=Te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Ce=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ae(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var o=t[n].substring(0,s);r=t[n].substring(s+1)}else o=t[n];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Ie(this,t.j),this.o=t.o,this.g=t.g,Re(this,t.s),this.l=t.l;var e=t.i,n=new Ge;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xe(this,n),this.m=t.m}else t&&(e=String(t).match(Ce))?(this.h=!1,Ie(this,e[1]||"",!0),this.o=Le(e[2]||""),this.g=Le(e[3]||"",!0),Re(this,e[4]),this.l=Le(e[5]||"",!0),xe(this,e[6]||"",!0),this.m=Le(e[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}function Pe(t){return new Oe(t)}function Ie(t,e,n){t.j=n?Le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Re(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function xe(t,e,n){e instanceof Ge?(t.i=e,ze(t.i,t.h)):(n||(e=He(e,Ue)),t.i=new Ge(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function De(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function He(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Oe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(He(e,Be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(He(e,Be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(He(n,"/"==n.charAt(0)?Ne:Fe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",He(n,Ke)),t.join("")};var ke,Be=/[#\/\?@]/g,Fe=/[#\?:]/g,Ne=/[#\?]/g,Ue=/[#\?@]/g,Ke=/#/g;function Ge(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ye(t){t.g||(t.g=new Map,t.h=0,t.i&&Ae(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Je(t,e){Ye(t),e=Ve(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function We(t,e){return Ye(t),e=Ve(t,e),t.g.has(e)}function qe(t,e,n){Je(t,e),0<n.length&&(t.i=null,t.g.set(Ve(t,e),C(n)),t.h+=n.length)}function Ve(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ze(t,e){e&&!t.j&&(Ye(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(Je(this,e),qe(this,n,t))},t)),t.j=e}function Ze(t,e){const n=new Gt;if(v.Image){const s=new Image;s.onload=j(Qe,n,"TestLoadImage: loaded",!0,e,s),s.onerror=j(Qe,n,"TestLoadImage: error",!1,e,s),s.onabort=j(Qe,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=j(Qe,n,"TestLoadImage: timeout",!1,e,s),v.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $e(t,e){const n=new Gt,s=new AbortController,r=setTimeout(()=>{s.abort(),Qe(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:s.signal}).then(t=>{clearTimeout(r),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(r),Qe(n,"TestPingServer: error",!1,e)})}function Qe(t,e,n,s,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),s(n)}catch(t){}}function tn(){this.g=new Pt}function en(t,e,n){const s=n||"";try{Ee(t,function(t,n){let r=t;b(t)&&(r=At(t)),e.push(s+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function nn(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){vt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function rn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function on(t){t.readyState=4,t.l=null,t.j=null,t.v=null,hn(t)}function hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function an(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function ln(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=an(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function un(t){vt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(f=Ge.prototype).add=function(t,e){Ye(this),this.i=null,t=Ve(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},f.forEach=function(t,e){Ye(this),this.g.forEach(function(n,s){n.forEach(function(n){t.call(e,n,s,this)},this)},this)},f.na=function(){Ye(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},f.V=function(t){Ye(this);let e=[];if("string"==typeof t)We(this,t)&&(e=e.concat(this.g.get(Ve(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},f.set=function(t,e){return Ye(this),this.i=null,We(this,t=Ve(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},f.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},f.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const o=encodeURIComponent(String(s)),h=this.V(s);for(s=0;s<h.length;s++){var r=o;""!==h[s]&&(r+="="+encodeURIComponent(String(h[s]))),t.push(r)}}return this.i=t.join("&")},E(nn,It),nn.prototype.g=function(){return new sn(this.l,this.j)},nn.prototype.i=(ke={},function(){return ke}),E(sn,vt),(f=sn.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,hn(this)},f.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||v).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},f.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=0},f.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},f.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?on(this):hn(this),3==this.readyState&&rn(this)}},f.Ra=function(t){this.g&&(this.response=this.responseText=t,on(this))},f.Qa=function(t){this.g&&(this.response=t,on(this))},f.ga=function(){this.g&&on(this)},f.setRequestHeader=function(t,e){this.u.append(t,e)},f.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},f.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),E(un,vt);var cn=/^https?$/i,fn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,pn(t),yn(t)}function pn(t){t.A||(t.A=!0,mt(t,"complete"),mt(t,"error"))}function dn(t){if(t.h&&void 0!==y&&(!t.v[1]||4!=mn(t)||2!=t.Z()))if(t.u&&4==mn(t))wt(t.Ea,0,t);else if(mt(t,"readystatechange"),4==mn(t)){t.h=!1;try{const h=t.Z();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===h){var r=String(t.D).match(Ce)[1]||null;!r&&v.self&&v.self.location&&(r=v.self.location.protocol.slice(0,-1)),s=!cn.test(r?r.toLowerCase():"")}n=s}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<mn(t)?t.g.statusText:""}catch(t){o=""}t.l=o+" ["+t.Z()+"]",pn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){vn(t);const n=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||mt(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function vn(t){t.I&&(v.clearTimeout(t.I),t.I=null)}function mn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function wn(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(O(t[s]))continue;var n=H(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=e[r]||[];e[r]=o,o.push(n)}_(e,function(t){return t.join(", ")})}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new de(t&&t.concurrentRequestLimit),this.Da=new tn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function jn(t){if(Cn(t),3==t.G){var e=t.U++,n=Pe(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),In(t,n),(e=new te(t,t.j,e)).L=2,e.v=De(Pe(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&v.Image&&((new Image).src=e.v,n=!0),n||(e.g=Nn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),ae(e)}Bn(t)}function En(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function Cn(t){En(t),t.u&&(v.clearTimeout(t.u),t.u=null),Ln(t),t.h.cancel(),t.s&&("number"==typeof t.s&&v.clearTimeout(t.s),t.s=null)}function An(t){if(!ye(t.h)&&!t.s){t.s=!0;var e=t.Ga;N||G(),U||(N(),U=!0),K.add(e,t),t.B=0}}function On(t,e){return!(ve(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(S(t.Ga,t,e),Xn(t,t.B)),t.B++,!0))}function Pn(t,e){var n;n=e?e.l:t.U++;const s=Pe(t.I);Me(s,"SID",t.K),Me(s,"RID",n),Me(s,"AID",t.T),In(t,s),t.m&&t.o&&ln(s,t.m,t.o),n=new te(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Rn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),be(t.h,n),se(n,s,e)}function In(t,e){t.H&&x(t.H,function(t,n){Me(e,n,t)}),t.l&&Ee({},function(t,n){Me(e,n,t)})}function Rn(t,e,n){n=Math.min(t.i.length,n);var s=t.l?S(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let h=0;h<n;h++){let n=r[h].g;const a=r[h].map;if(n-=e,0>n)e=Math.max(0,r[h].g-100),o=!1;else try{en(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function xn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;N||G(),U||(N(),U=!0),K.add(e,t),t.v=0}}function _n(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(S(t.Fa,t),Xn(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(v.clearTimeout(t.A),t.A=null)}function Dn(t){t.g=new te(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Pe(t.qa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.T),Me(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Me(e,"TO",t.ja),Me(e,"TYPE","xmlhttp"),In(t,e),t.m&&t.o&&ln(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=De(Pe(e)),n.m=null,n.P=!0,re(n,t)}function Ln(t){null!=t.C&&(v.clearTimeout(t.C),t.C=null)}function Hn(t,e){var n=null;if(t.g==e){Ln(t),Mn(t),t.g=null;var s=2}else{if(!me(t.h,e))return;n=e.D,we(t.h,e),s=1}if(0!=t.G)if(e.o)if(1==s){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;mt(s=Xt(),new Ut(s,n)),An(t)}else xn(t);else if(3==(r=e.s)||0==r&&0<e.X||!(1==s&&On(t,e)||2==s&&_n(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:kn(t,5);break;case 4:kn(t,10);break;case 3:kn(t,6);break;default:kn(t,2)}}function Xn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function kn(t,e){if(t.j.info("Error code "+e),2==e){var n=S(t.fb,t),s=t.Xa;const e=!s;s=new Oe(s||"//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||Ie(s,"https"),De(s),e?Ze(s.toString(),n):$e(s.toString(),n)}else Nt(2);t.G=0,t.l&&t.l.sa(e),Bn(t),Cn(t)}function Bn(t){if(t.G=0,t.ka=[],t.l){const e=Te(t.h);0==e.length&&0==t.i.length||(A(t.ka,e),A(t.ka,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ra()}}function Fn(t,e,n){var s=n instanceof Oe?Pe(n):new Oe(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Re(s,s.s);else{var r=v.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var o=new Oe(null);s&&Ie(o,s),e&&(o.g=e),r&&Re(o,r),n&&(o.l=n),s=o}return n=t.D,e=t.ya,n&&e&&Me(s,n,e),Me(s,"VER",t.la),In(t,s),s}function Nn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new un(new nn({eb:n})):new un(t.pa)).Ha(t.J),e}function Un(){}function Kn(){}function Gn(t,e){vt.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!O(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wn(this)}function Yn(t){Mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Jn(){Dt.call(this),this.status=1}function Wn(t){this.g=t}(f=un.prototype).Ha=function(t){this.J=t},f.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zt.g(),this.v=this.o?Rt(this.o):Rt(zt),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void gn(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=v.FormData&&t instanceof v.FormData,!(0<=Array.prototype.indexOf.call(fn,e,void 0))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vn(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){gn(this,t)}},f.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),yn(this))},f.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),un.aa.N.call(this)},f.Ea=function(){this.s||(this.B||this.u||this.j?dn(this):this.bb())},f.bb=function(){dn(this)},f.isActive=function(){return!!this.g},f.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch(t){return-1}},f.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},f.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ot(e)}},f.Ba=function(){return this.m},f.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(f=Sn.prototype).la=8,f.G=1,f.connect=function(t,e,n,s){Nt(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.I=Fn(this,null,this.W),An(this)},f.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new te(this,this.j,t);let o=this.o;if(this.S&&(o?(o=M(o),L(o,this.S)):o=this.S),null!==this.m||this.O||(r.H=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rn(this,r,e),Me(n=Pe(this.I),"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),In(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(an(o)))+"&"+e:this.m&&ln(n,this.m,o)),be(this.h,r),this.Ua&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),r.T=!0,se(r,n,null)):se(r,n,e),this.G=2}}else 3==this.G&&(t?Pn(this,t):0==this.i.length||ye(this.h)||Pn(this))},f.Fa=function(){if(this.u=null,Dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(S(this.ab,this),t)}},f.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),En(this),Dn(this))},f.Za=function(){null!=this.C&&(this.C=null,En(this),_n(this),Nt(19))},f.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))},f.isActive=function(){return!!this.l&&this.l.isActive(this)},(f=Un.prototype).ua=function(){},f.ta=function(){},f.sa=function(){},f.ra=function(){},f.isActive=function(){return!0},f.Na=function(){},Kn.prototype.g=function(t,e){return new Gn(t,e)},E(Gn,vt),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){jn(this.g)},Gn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=At(t),t=n);e.i.push(new pe(e.Ya++,t)),3==e.G&&An(e)},Gn.prototype.N=function(){this.g.l=null,delete this.j,jn(this.g),delete this.g,Gn.aa.N.call(this)},E(Yn,Mt),E(Jn,Dt),E(Wn,Un),Wn.prototype.ua=function(){mt(this.g,"a")},Wn.prototype.ta=function(t){mt(this.g,new Yn(t))},Wn.prototype.sa=function(t){mt(this.g,new Jn)},Wn.prototype.ra=function(){mt(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,l=c.createWebChannelTransport=function(){return new Kn},a=c.getStatEventTarget=function(){return Xt()},h=c.Event=Lt,o=c.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zt.NO_ERROR=0,Zt.TIMEOUT=8,Zt.HTTP_ERROR=6,r=c.ErrorCode=Zt,$t.COMPLETE="complete",s=c.EventType=$t,xt.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",vt.prototype.listen=vt.prototype.K,n=c.WebChannel=xt,e=c.FetchXmlHttpFactory=nn,un.prototype.listenOnce=un.prototype.L,un.prototype.getLastError=un.prototype.Ka,un.prototype.getLastErrorCode=un.prototype.Ba,un.prototype.getStatus=un.prototype.Z,un.prototype.getResponseJson=un.prototype.Oa,un.prototype.getResponseText=un.prototype.oa,un.prototype.send=un.prototype.ea,un.prototype.setWithCredentials=un.prototype.Ha,t=c.XhrIo=un}).apply(void 0!==u?u:'undefined'!=typeof self?self:'undefined'!=typeof window?window:{})},864,[]);