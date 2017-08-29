<template>
    <div class="footer">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-nav">
                <MenuItem name="1">
                    首页
                </MenuItem>
                <MenuItem name="2">
                    调理师
                </MenuItem>
                <MenuItem name="3">
                    咨询专家
                </MenuItem>
                <MenuItem name="4">
                    预约到店
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>
<style>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
    .footer .ivu-menu-dark{
        background:#fff;
    }
</style>