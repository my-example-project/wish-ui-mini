<!--
	自定义 loading - 组件
 -->
<template>
    <view :class="['my-loading',isFullScreen ? 'is-full-screen' : 'is-default']" :style="currLoadingStyle">
        <view class="my-loading__wrap" v-if="isFullScreen">
            <view class="circle-content">
                <view class="icon-circle circle-180" :style="currCircleStyle"></view>
                <view class="icon-circle circle-90" :style="currCircleStyle"></view>
            </view>
        </view>

        <view class="my-loading__wrap" v-else>
            <view class="circle-content">
                <view class="icon-circle circle-180" :style="currCircleStyle"></view>
                <view class="icon-circle circle-90" :style="currCircleStyle"></view>
            </view>
            <view class="loading-text">{{text}}</view>
        </view>
    </view>
</template>

<script>
import tools from "@/utils/tools.js"
const DEFAULT_LOADING_STYLE = {
    'border-radius': '20rpx'
}

const DEFAULT_CIRCLE_STYLE = {
    'border-color': '#ff491c',
    'border-width': '6rpx'
}

export default {
	name: 'MyLoading',
	data () {
		return {
		}
	},
	props: {
        /** 是否全屏 */
        isFullScreen:{
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: '加载中...'
        },
        loadingStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        circleStyle: {
            type: Object,
            default() {
                return {}
            }
        }

	},
	computed: {
        currLoadingStyle() {
            return {...DEFAULT_LOADING_STYLE,...this.loadingStyle}
        },
        currCircleStyle() {
            return {...DEFAULT_CIRCLE_STYLE,...this.circleStyle}
        }
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>

  @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

.my-loading {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    &.is-default {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200rpx;
        height: 200rpx;
        background: rgba(0,0,0,0.6);
        color: #fff;
        font-size: 24rpx;
        border-radius: 20rpx;
    }

    &.is-full-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 200rpx;
        // height: 200rpx;
        // background: rgba(0,0,0,0.6);
    }

    .my-loading__wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .loading-text {
        font-size: 28rpx;
        padding-top: 20rpx;
    }


    .circle-content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;

        .icon-circle {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 60rpx;
            height: 60rpx;
            border-radius: 50%;
            border:6rpx solid #ff491c;

            -webkit-transform: rotate(360deg);
            animation: rotation 2s linear infinite;
            -moz-animation: rotation 2s linear infinite;
            -webkit-animation: rotation 2s linear infinite;
            -o-animation: rotation 2s linear infinite;
        }

        .circle-180 {
            clip: rect(30rpx, auto, auto, auto);
              // transform: rotate(90deg);
        }

        .circle-90 {
            clip:rect(auto,30rpx,30rpx,auto);

        }

        .icon-content {
            position: absolute;
            left: 50%;
            top: 50%;
            right: 0;
            bottom: 0;
            transform: translate(-50%,-50%);
            margin: 0 auto;
            width: 40rpx;
            height: 40rpx;
             background: rgba(255,255,255,1);
             border-radius: 50%;

        }
    }
}
</style>
