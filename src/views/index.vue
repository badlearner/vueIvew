<style scoped>
    .index{width:100%;height:100%;}
    .index .ivu-row-flex {
        height: 100%;
    }
    .pic-carousel{
        height:6rem;
    }
    .pic-carousel .demo-carousel{
        height:6rem;
    }
    .pic-carousel .demo-carousel img{
        height:6rem;
        width:100%;
    }
</style>
<template>
    <div class="index">
        <header></header>
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
        <footers></footers>
    </div>
</template>
<script>
    import header from "./baseCommponent/header.vue";
    import footer from "./baseCommponent/footer.vue";
    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'never'
                }
            }
        },
        components:{
            footers:footer,
            header:header
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