ASPV.validate=METHOD(function(e){var r,i=require("iap_verifier");return{run:function(e,n){void 0===r&&(r=new i(NODE_CONFIG.ASPV.sharedSecretKey)),r.verifyReceipt(e,!0,n)}}});