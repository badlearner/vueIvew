<template>
    <div class="amap">
        <div class="amap-wrapper">
            <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :events="events"></el-amap>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                zoom: 12,
                center: [121.59996, 31.197646],
                events: {
                    init(o) {
                        let marker = new AMap.Marker({
                            position: [121.59996, 31.197646]
                        });

                        marker.setMap(o);
                    }
                }
            }
        }
    }
</script>
<style>
    .amap,.amap-wrapper {
        width: 100%;
        height: 100%;
    }
</style>