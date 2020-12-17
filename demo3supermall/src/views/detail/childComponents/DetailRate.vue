<template>
  <div>
    <div class="rate-container" v-if="hasRate" @click="goDefault()">
      <div class="title">
        <p>
          用户评价 : <span>{{ detailRate.cRate }}</span>
        </p>
        <p>更多</p>
      </div>
      <div class="main">
        <!-- 用户信息 -->
        <div class="user-info" v-if="userInfo">
          <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="" />
          <img v-else />
          <span class="uname">{{ userInfo.uname }}</span>
        </div>
        <!-- 附加信息 -->
        <div v-if="rateContent.extraInfo" class="extra-info">
          <span v-for="info in rateContent.extraInfo" :key="info + 11">{{
            `"${info}"`
          }}</span>
        </div>
        <!-- 内容 -->
        <div class="rate-content">
          <p class="content">
            {{ rateContent.content }}
          </p>
          <!-- 有图片则显示 -->
          <div v-if="rateContent.images" class="rate-img-container">
            <img
              :class="{ click: isClickRateImg === index }"
              @click="rateImgClick(index)"
              v-for="(img, index) in rateContent.images"
              :src="img"
              :key="img"
            />
          </div>
          <p class="style">
            <span>{{ rateCreated }} </span><span>{{ rateContent.style }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="empty" v-else>
      <p>暂无评价</p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "components/common/utils";
export default {
  name: "DetailRate",
  created() {},
  data() {
    return {
      isClickRateImg: null,
    };
  },
  props: {
    detailRate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    hasRate() {
      return this.detailRate.list && this.detailRate.list[0];
    },
    userInfo() {
      return (
        this.detailRate.list &&
        this.detailRate.list[0] &&
        this.detailRate.list[0].user
      );
    },

    rateCreated() {
      return (
        this.detailRate.list && formatDate(this.rateContent.created * 1000)
      );
    },
    rateContent() {
      return this.detailRate.list && this.detailRate.list[0];
    },
  },
  methods: {
    rateImgClick(index) {
      this.isClickRateImg = index;
    },
    goDefault() {
      if (event.target.tagName === "IMG") return;
      this.isClickRateImg = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
.rate-container {
  padding: 0 2.886%;
  font-size: $font-size;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: solid 2px rgba($color: #000000, $alpha: 0.08);
    p {
    }
  }
  .main {
    margin: 15px 0;
    background: rgba($color: #bebdbd, $alpha: 0.08);
    padding: 10px;
    .user-info {
      img {
        width: 5vw;
        border-radius: 50%;
      }
      .uname {
        color: rgba($color: #bebbbb, $alpha: 1);
        font-size: $font-size - 7px;
      }
    }
    .extra-info {
      span {
        font-size: $font-size - 10px;
        color: rgba($color: #bebbbb, $alpha: 1);
        padding: 1px 2px;
      }
    }
    .rate-content {
      padding: 3vw 0;
      font-size: $font-size - 5px;
      .rate-img-container {
        display: flex;
        img {
          width: 10vw;
          height: 10vw;
          margin: 5px;
          border: 1px solid rgba($color: #000000, $alpha: 0.08);
        }
        .click {
          width: 40vw;
          height: 40vw;
        }
      }
      .style {
        padding: 8px 0;
        color: rgba($color: #bebbbb, $alpha: 1);
      }
    }
  }
}
.empty {
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>