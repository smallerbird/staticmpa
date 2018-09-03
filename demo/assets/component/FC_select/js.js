define(function (require, exports, module) {
    class FC_select{
        constructor({targetSelector,id,data,value=0}) {
            this.$targetContainer=$(targetSelector)
            let index=0;
            for (let i=0;i<data.length;i++){
                if (data[i].value==value){
                    index=i;
                    break;
                }
            }
            let label=data[index].label;
            let currentValue=data[index].value;
            let tpl=`
                <div class="FC-select" id="${id}">
                    <div class="title"><span>${label}</span><input type="hidden" id="${id}_value" value="${currentValue}" /></div>
                    <div class="select-list">
                        [:for(var i=0;i<data.length;i++){:]
                            <a href="#" data-value="[:=data[i].value:]">[:=data[i].label:]</a>
                        [:}:]
                    </div>
                    <div class="clearfix"></div>
                </div>
            `;
            //console.log('tpl:',tpl)
            let html=window.renderTemplete(tpl,{data});
            //this.$target=$(html)
            this.$targetContainer.append(html);
            this.$target=this.$targetContainer.find('#'+id);
            this._init();
        }
        _init(){
            var $this=this.$target;
            var $title=$this.find('.title>span');
            var $value=$this.find('.title>input');
            var $selectList=$this.find('.select-list');

            /*$selectList.hover(function () {
                $selectList.show();
            },function () {
                $selectList.hide();
            })*/
            $this.on('click','.select-list>a',function (e) {
            //$this.find('.select-list>a').click(function (e) {
                window.e_preventDefault(e);
                var $this=$(this)
                var value=$this.data('value')
                var title=$this.html();
                $selectList.addClass('hidden');
                setTimeout(function () {
                    $selectList.removeClass('hidden');
                },500)
                $title.html(title);
                $value.html(value);
                //console.log(value,title)
            })
        }

    }

    exports.FC_select=FC_select;
    return FC_select;
});
