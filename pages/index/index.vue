<template>
    <view class="sg-page">
        <!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
        <!-- 页面级 -->
        <view class="group">
            <view>
                <text class="group-title">页面级</text>
                <view>
                    <button
                        class="group-btn"
                        type="primary"
                        size="mini"
                        @click="jumpPage(item)"
                        v-for="item in groupOneList"
                        :key="item.id"
                    >
                        {{ item.text }}
                    </button>
                </view>
            </view>
        </view>

        <!-- 功能级 -->
        <view class="group">
            <view>
                <text class="group-title">功能级</text>
                <view>
                    <button
                        class="group-btn"
                        type="primary"
                        size="mini"
                        @click="jumpPage(item)"
                        v-for="item in groupTwoList"
                        :key="item.id"
                    >
                        {{ item.text }}
                    </button>
                </view>
            </view>
        </view>
        <!-- 其它 -->
        <view class="group">
            <view>
                <text class="group-title">其它</text>
                <view>
                    <button
                        class="group-btn"
                        type="primary"
                        size="mini"
                        @click="jumpPage(item)"
                        v-for="item in groupThreeList"
                        :key="item.id"
                    >
                        {{ item.text }}
                    </button>
                </view>
            </view>
        </view>

        <!-- 操作 -->
        <view class="group">
            <view>
                <text class="group-title">操作</text>
                <view>
                    <button
                        class="group-btn"
                        type="primary"
                        size="mini"
                        @click="onOperateBtn(item)"
                        v-for="item in operateBtns"
                        :key="item.id"
                    >
                        {{ item.text }}
                    </button>
                </view>
            </view>
        </view>

     <!--   <my-loading :loading-style="{'border-radius': '20rpx'}" :circle-style="{'border-color': '#fff','border-width': '6rpx'}" />
        <my-loading is-full-screen :loading-style="{'border-radius': '20rpx'}" :circle-style="{'border-color': 'red','border-width': '6rpx'}" /> -->
        <my-toast @hide="toastHideHandler" :visible="isToast" :options="{text: '修改成功',duration: 1500}" :toast-style="{'border-radius': '20rpx'}" />
    </view>
</template>

<script>
import {
    ENUM_PAGE_LIST,
    ENUM_FUNCTION_LIST,
    ENUM_OTHER_LIST,
} from "./enums.js";
export default {
    data() {
        return {
            isToast: false,
            href: "https://uniapp.dcloud.io/component/README?id=uniui",
            operateBtns: [
                {
                    text: 'toast',
                    type: 'toast'
                },
                {
                    text: '全屏loading',
                    type: 'full-loading'
                },
                {
                    text: '交互loading',
                     type: 'operate-loading'
                },
            ]
        };
    },
    computed: {
        groupOneList() {
            return ENUM_PAGE_LIST;
        },
        groupTwoList() {
            return ENUM_FUNCTION_LIST;
        },
        groupThreeList() {
            return ENUM_OTHER_LIST;
        },
    },
    methods: {
        jumpPage(item) {
            console.log("item :>>", item);
            uni.navigateTo({ url: item.url });
        },
        onOperateBtn(item) {
            const {type} = item
            console.log("type",type)
            console.log("uni",uni)
            this.isToast = true
        },
        toastHideHandler(){
            this.isToast = false
        }
    },
};
</script>

<style lang="scss" scoped>
.group {
    margin-bottom: 20rpx;

    .group-title {
        display: block;
        font-size: 32rpx;
        font-weight: 600;
        line-height: 32rpx;
        margin-bottom: 20rpx;
    }

    .group-btn {
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        // overflow: visible;
    }
}
</style>
