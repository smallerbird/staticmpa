$(function(){function t(t,e){window.SMPA.alert(t+JSON.stringify(e))}function e(){window.WebAPI.get({url:"login/getVerifyCodeImage",host:"http://ctm-test.seedland.cc:9090/pactera-base-gateway/"}).then(function(t){var e=t.data;$("input[name='uniquekey']").val(e.uniquekey),$("#verifyCodeImage").attr("src","data:image/jpeg;base64,"+e.image)},function(e){t("[get error:]",e)})}window.WebAPI.setCallbackStepStatus(function(t,e){});var n={};$(".btnDebug").click(function(t){t.preventDefault();var e=$(this).data("type");n[e]()}),n.loading=function(){window.SMPA.DialogLoading(),setTimeout(function(){window.SMPA.DialogLoadingClose()},3e3)},n.alert=function(){window.SMPA.alert("alert",function(){alert("点击确定了")})},n.confirm=function(){window.SMPA.confirm("是否要删除",function(t){alert(t)},["删除","不删除"])},n.layer=function(){layer.prompt({title:"输入任何口令，并确认",formType:1},function(t,e){layer.close(e),layer.prompt({title:"随便写点啥，并确认",formType:2},function(e,n){layer.close(n),layer.msg("演示完毕！您的口令："+t+"<br>您最后写下了："+e)})})},n.login=function(){var e=$("input[name='userCode']").val(),n=$("input[name='uniquekey']").val(),o=$("input[name='password']").val();window.WebAPI.post({url:"testapi_login",body:{userCode:e,uniquekey:n,password:o}}).then(function(e){t("[post ok:]",e);var n=e.data;window.SMPA.saveAuth(n.sessionKey)},function(e){t("[post error:]",e)})},e(),n.getVerifyCodeImage=e,n.getAuth=function(){window.SMPA.alert(window.SMPA.getAuth())},n.response401=function(){window.WebAPI.post({url:"testapi_401",body:{msg:"hi~form response401"},params:{c:1,d:2}})},n.response403=function(){window.WebAPI.post({url:"testapi_403",body:{msg:"hi~form response403"},params:{c:1,d:2}})},n.get=function(){console.log("get.."),window.WebAPI.get({url:"testapi_get",params:{a:1,b:2}}).then(function(e){t("[get ok:]",e)},function(e){t("[get error:]",e)})},n.post=function(){window.WebAPI.post({url:"testapi_post",body:{msg:"hi~form post"},params:{c:1,d:2}}).then(function(e){t("[post ok:]",e)},function(e){t("[post error:]",e)})}});