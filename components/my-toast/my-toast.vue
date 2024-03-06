<!--
	自定义 toast - 组件
 -->
<template>
    <view :class="['my-toast','is-default']" :style="currToastStyle" v-if="isShow">
        <view class="my-toast__wrap">
            <view class="icon-circle"></view>
            <view class="toast-text">{{currToastOptions.text}}</view>
        </view>
    </view>
</template>

<script>
const DEFAULT_TOAST_STYLE = {
    'border-radius': '20rpx'
}

const DEFAULT_TOAST_OPTIONS = {
    text: 'toast文本',
    duration: 1500,
}


export default {
	name: 'MyToast',
	data () {
		return {
            isShow:false
		}
	},
	props: {
        visible: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default(){
                return {}
            }
        },
        toastStyle: {
            type: Object,
            default() {
                return {}
            }
        },

	},
	computed: {
        currToastStyle() {
            return {...DEFAULT_TOAST_STYLE,...this.toastStyle}
        },
        currToastOptions() {
            return {...DEFAULT_TOAST_OPTIONS,...this.options}
        }
	},
    watch: {
      visible(newVal,oldVal) {
          console.log("new-val",newVal)
          console.log("old-val",oldVal)
          if (newVal) {
              this.init()
          }
      }
    },
	methods: {
        show(){
            this.isShow = true
        },
        hide(){
            this.isShow = false
        },
        init() {
            this.show()
            const {duration = 1500} = this.options
            setTimeout(() => {
                this.hide()
                this.$emit('hide')
            },duration)
        }
	}
}
</script>

<style lang="scss" scoped>

.my-toast {
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

    .my-toast__wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon-circle {

        width: 60rpx;
        height: 60rpx;
        background: url("./assets/icon-gou.svg") no-repeat;
        background-size: 100% 100%;
    }

    .toast-text {
        font-size: 28rpx;
        padding-top: 20rpx;
    }
}
</style>
