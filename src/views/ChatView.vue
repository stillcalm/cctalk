<template>
    <div id="root">
      <div class="im-app-example-wrapper">
        <div class="im-app-example">
          <div class="container">
            <div class="header">
              <div class="search">
                <div class="search-search-wrapper">
                  <div class="search-search-wrapper-button">
                    <span
                      role="img"
                      aria-label="search"
                      class="anticon anticon-search"
                      ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                        ></path></svg></span
                    ><span class="search-search-wrapper-text"
                      >搜索好友或群组</span
                    >
                  </div>
                </div>
              </div>
              <div class="add">
                <div>
                  <div class="search-add-panel">
                    <div class="search-add-panel-btn">
                      <span role="img" class="anticon search-add-panel-btn-img"
                        ><svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          class=""
                        >
                          <use xlink:href="#icon-tianjiaanniu"></use></svg
                      ></span>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <div class="avatar-icon">
                  <div class="common-complex-avatar-wrapper">
                    <div>
                      <span class="ant-badge ant-badge-status"
                        ><span
                          class="ant-avatar ant-avatar-circle ant-avatar-image"
                          style="
                            width: 36px;
                            height: 36px;
                            line-height: 36px;
                            font-size: 18px;
                            vertical-align: middle;
                          "
                          ><img
                            src="https://yx-web-nosdn.netease.im/quickhtml/assets/yunxin/default/g2-demo-avatar-imgs/86117916533067776.jpg"
                            alt="43" /></span
                      ></span>
                    </div>
                  </div>
                </div>
                <span class="ant-badge"
                  ><div class="chat-icon active">
                    <i class="iconfont"></i>
                    <div class="icon-label">会话</div>
                  </div></span
                ><span class="ant-badge"
                  ><div class="contact-icon">
                    <i class="iconfont"></i>
                    <div class="icon-label">通讯录</div>
                  </div></span
                >
                <div>
                  <div class="menu-icon"><i class="iconfont expand"></i></div>
                </div>
              </div>
              <div class="right">
                <div class="right-list">
                  <div class="conversation-list-wrapper">
                    <div class="ant-dropdown-trigger conversation-item">
                      <div
                        class="common-complex-avatar-wrapper common-complex-avatar-wrapper-nocursor"
                      >
                        <div>
                          <span class="ant-badge ant-badge-status"
                            ><span
                              class="ant-avatar ant-avatar-circle"
                              style="
                                width: 36px;
                                height: 36px;
                                line-height: 36px;
                                font-size: 18px;
                                vertical-align: middle;
                                background-color: rgb(249, 183, 81);
                              "
                              ><span
                                class="ant-avatar-string"
                                style="
                                  line-height: 36px;
                                  transform: scale(0.777778) translateX(-50%);
                                "
                                >小信</span
                              ></span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="conversation-item-content">
                        <div class="conversation-item-content-name">小信</div>
                        <div class="conversation-item-content-msg">
                          <div class="conversation-item-content-msg-body">
                            欢迎使用云信IM UIkit，现在就发送属于你的第一条消息吧~
                          </div>
                        </div>
                      </div>
                      <div class="conversation-item-state">
                        <div class="conversation-item-state-date">10:52</div>
                        <div class="conversation-item-state-mute"></div>
                      </div>
                    </div>
                    <div class="ant-dropdown-trigger conversation-item">
                      <span class="ant-badge ant-badge-status"
                        ><span
                          class="ant-avatar ant-avatar-circle"
                          style="
                            width: 36px;
                            height: 36px;
                            line-height: 36px;
                            font-size: 18px;
                            vertical-align: middle;
                            background-color: rgb(96, 207, 167);
                          "
                          ><span
                            class="ant-avatar-string"
                            style="
                              line-height: 36px;
                              transform: scale(0.777778) translateX(-50%);
                            "
                            >家门</span
                          ></span
                        ></span
                      >
                      <div class="conversation-item-content">
                        <div class="conversation-item-content-name">
                          不是一家人不进一家门
                        </div>
                        <div class="conversation-item-content-msg">
                          <div class="conversation-item-content-msg-body">
                            Hello World！
                          </div>
                        </div>
                      </div>
                      <div class="conversation-item-state">
                        <div class="conversation-item-state-date">10:52</div>
                        <div class="conversation-item-state-mute"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-content">
                  <div class="common-welcome-wrap">
                    <img
                      src="https://yx-web-nosdn.netease.im/common/630b48dc545af0633aaaa53bbd65cbb0/欢迎使用云信.png"
                    />欢迎使用云信
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="app-info">©1997 - 2024 网易公司版权所有 v9.7.1</div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .home {
    display: block;
  }
  .im-app-example-wrapper {
    width: 100vw;
    height: 100vh;
    min-height: 730px;
    background: #d8dee5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .im-app-example .container {
    width: 1070px;
    height: 670px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
  .im-app-example .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e8e8e8;
  }
  .im-app-example .search {
    width: 50%;
  }
  .search-search-wrapper {
    width: 100%;
  }
  .search-search-wrapper-button {
    width: 100%;
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #b3b7bc;
    background: #f1f5f8;
    border-radius: 4px;
    cursor: pointer;
  }
  .anticon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .anticon svg {
    display: inline-block;
  }
  .im-app-example .content {
    width: 100%;
    height: 610px;
    display: flex;
  }
  .im-app-example .add {
    margin-left: 20px;
  }
  .search-add-panel {
    display: inline-block;
  }
  .search-add-panel-btn {
    display: flex;
    width: 32px;
    height: 32px;
    background: #f1f5f8;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
  }
  
  .im-app-example .content {
    width: 100%;
    height: 610px;
    display: flex;
  }
  .im-app-example .left {
    width: 60px;
    border-right: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .im-app-example .avatar-icon {
    margin: 20px 0 25px 0;
    border-radius: 50%;
    border: 1px solid #e8e8e8;
  }
  .common-complex-avatar-wrapper {
    width: fit-content;
    cursor: pointer;
  }
  .ant-badge-status {
    line-height: inherit;
    vertical-align: baseline;
  }
  .ant-badge {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    line-height: 1;
  }
  .ant-avatar {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: #ccc;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
  }
  </style>
  