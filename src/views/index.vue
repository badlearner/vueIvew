<style scoped>
    .index{width:100%;height:100%;}
    .index .ivu-row-flex {
        height: 100%;
    }
    .pic-carousel{
        padding-top: 2.15rem;
    }
    .pic-carousel .demo-carousel{
        height:8rem;
    }
    .pic-carousel .demo-carousel img{
        height:8rem;
        width:100%;
    }
</style>
<template>
    <div class="index">
        <headers></headers>
        <div class="pic-carousel">
            <Carousel
                    v-model="value3"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :trigger="setting.trigger"
                    :arrow="setting.arrow">
                <CarouselItem>
                    <div class="demo-carousel"><img src="../images/swiper1.png" /></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../images/hands.png" /></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../images/hands.png" /></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel"><img src="../images/swiper1.png" /></div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="page_flex">
            <div class="page_bd page_bd_spacing">
                <div class="weui-flex">
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-1"></i></p>
                                <p>母乳喂养</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-2"></i></p>
                                <p>胸部护理</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-3"></i></p>
                                <p>体型管理</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-4"></i></p>
                                <p>体质调理</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_bd page_bd_spacing">
                <div class="weui-flex">
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-5"></i></p>
                                <p>预期调理</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-6"></i></p>
                                <p>私密养护</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-7"></i></p>
                                <p>面部护理</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="#">
                                <p><i class="index-icon index-icon-8"></i></p>
                                <p>小儿推拿</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_bd page_bd_spacing">
                <div class="weui-flex index-image">
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="../center/DNA_center.html" class="images_1">
                                <p>基因监测</p>
                            </a>
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="placeholder">
                            <a href="../center/nanny_center.html" class="images_2">
                                <p>月嫂中心</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>
<script>
    import headers from "./baseCommponent/header.vue";
    import footer from "./baseCommponent/footer.vue";
    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'never'
                }
            }
        },
        components:{
            footers:footer,
            headers:headers
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>