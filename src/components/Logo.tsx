interface ILogo {
  width?: string;
  color?: string;
}

const Logo = ({ color = "#0047BA", width = '303' }: ILogo) => {
  return (
    <svg
      width={width}
      viewBox="0 0 303 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7859 14.3466L30.7575 0H42.0916L49.5699 43.8433H38.1761L34.3801 18.6078L26.8015 34.8146H24.7859H22.7685L15.1899 18.6078L11.3939 43.8433H0L7.47837 0H18.8125L24.7859 14.3466Z"
        fill={color}
      />
      <path
        d="M76.1768 14.0148H86.8095V43.8433H76.1768V40.5295C73.9185 43.3601 70.8611 44.7747 67.0047 44.7734C64.9373 44.7965 62.8877 44.3902 60.9869 43.5806C59.1775 42.8011 57.5474 41.6616 56.1966 40.2322C54.8139 38.7688 53.7325 37.0502 53.0133 35.1732C52.2398 33.1511 51.8541 31.0025 51.8765 28.8389C51.8663 26.763 52.2426 24.7031 52.9864 22.7635C53.6868 20.9056 54.7379 19.1982 56.0829 17.7333C57.415 16.2947 59.0245 15.1377 60.8154 14.3313C62.7259 13.4823 64.7989 13.0563 66.891 13.0828C70.6318 13.0828 73.7283 14.3811 76.1807 16.9777V14.0129L76.1768 14.0148ZM62.8599 28.8428C62.8514 29.7701 63.0303 30.6896 63.3859 31.5468C63.7203 32.3572 64.2062 33.0971 64.8176 33.7273C65.4303 34.3544 66.1663 34.8493 66.9796 35.1809C67.841 35.5347 68.7649 35.7127 69.6966 35.7044C70.609 35.7127 71.5134 35.5345 72.3538 35.1809C73.1663 34.8476 73.9019 34.353 74.5158 33.7273C75.1248 33.1001 75.6191 32.3719 75.9764 31.5756C76.3489 30.7529 76.5388 29.8601 76.5333 28.9578C76.5366 28.0472 76.3469 27.146 75.9764 26.3133C75.6242 25.5055 75.1295 24.7671 74.5158 24.1328C73.9023 23.5066 73.1665 23.012 72.3538 22.6792C71.5122 22.3293 70.6086 22.1513 69.6966 22.1556C68.7652 22.1513 67.8421 22.3292 66.9796 22.6792C66.1667 23.0115 65.4308 23.5062 64.8176 24.1328C64.2156 24.7487 63.7306 25.4679 63.3859 26.2557C63.0307 27.072 62.8515 27.9533 62.8599 28.8428Z"
        fill={color}
      />
      <path
        d="M114.592 23.6668C112.761 22.4279 110.911 21.8079 109.042 21.8066C108.075 21.7995 107.115 21.9772 106.216 22.3301C105.354 22.6683 104.569 23.172 103.903 23.8125C103.24 24.4565 102.716 25.2277 102.362 26.0793C101.98 27.0107 101.791 28.0094 101.807 29.0154C101.792 30.002 101.981 30.9811 102.362 31.892C102.715 32.7388 103.23 33.5088 103.88 34.1587C104.539 34.8079 105.326 35.3128 106.192 35.6412C107.105 35.9934 108.077 36.171 109.056 36.1647C111.043 36.1647 112.893 35.4865 114.605 34.13V43.0839C111.996 44.2077 109.523 44.7696 107.185 44.7696C105.061 44.7799 102.952 44.4056 100.963 43.665C99.0379 42.9559 97.2706 41.8798 95.7601 40.4969C94.2397 39.1043 93.0123 37.4251 92.149 35.5568C91.2304 33.54 90.7698 31.3465 90.8002 29.1323C90.7722 26.9057 91.2099 24.6977 92.0854 22.6485C92.903 20.7464 94.0948 19.0263 95.5905 17.5895C97.1149 16.1466 98.9122 15.0195 100.878 14.2737C102.974 13.4702 105.204 13.0662 107.451 13.0828C109.923 13.0598 112.366 13.6176 114.58 14.711V23.6649L114.592 23.6668Z"
        fill={color}
      />
      <path
        d="M119.434 14.0148H130.009V18.8993C131.036 17.2178 132.459 15.811 134.156 14.8011C135.791 13.8525 137.699 13.3775 139.881 13.3762H140.786C141.169 13.3821 141.55 13.4212 141.925 13.4932V23.5479C140.51 22.8469 138.949 22.4881 137.368 22.5008C134.913 22.5008 133.073 23.2276 131.847 24.6813C130.622 26.1349 130.008 28.2572 130.007 31.0482V43.8414H119.434V14.0148Z"
        fill={color}
      />
      <path
        d="M145.054 28.6663C145.04 26.5285 145.501 24.414 146.403 22.474C147.288 20.5679 148.561 18.8655 150.142 17.4744C151.813 16.0151 153.745 14.8812 155.838 14.1318C158.15 13.2977 160.594 12.884 163.054 12.9102C165.491 12.884 167.914 13.2879 170.21 14.103C172.309 14.8382 174.249 15.9605 175.929 17.4111C177.534 18.8107 178.819 20.5356 179.699 22.4701C180.613 24.5091 181.073 26.7211 181.047 28.954C181.075 31.1896 180.606 33.4036 179.673 35.4379C178.78 37.3644 177.497 39.0867 175.904 40.4969C174.223 41.9606 172.267 43.0772 170.149 43.782C167.805 44.5761 165.343 44.9709 162.867 44.9499C160.441 44.9772 158.028 44.584 155.737 43.7877C153.654 43.0704 151.736 41.9434 150.099 40.4739C148.517 39.0336 147.254 37.2813 146.39 35.3286C145.471 33.2293 145.011 30.9597 145.041 28.6702M156.2 28.7852C156.188 29.7344 156.377 30.6753 156.755 31.5468C157.107 32.3544 157.602 33.0928 158.215 33.7273C158.828 34.3544 159.564 34.8493 160.377 35.1809C161.22 35.5308 162.124 35.7088 163.036 35.7044C163.948 35.7088 164.852 35.5307 165.694 35.1809C166.506 34.8476 167.242 34.353 167.856 33.7273C168.47 33.0933 168.965 32.3548 169.316 31.5468C169.69 30.6943 169.879 29.7729 169.871 28.8428C169.88 27.9318 169.69 27.0297 169.316 26.1982C168.963 25.3908 168.469 24.6525 167.856 24.0178C167.242 23.3912 166.507 22.8964 165.694 22.5641C164.852 22.2143 163.948 22.0362 163.036 22.0406C162.124 22.0353 161.219 22.2133 160.377 22.5641C159.564 22.8964 158.829 23.3912 158.215 24.0178C157.606 24.6449 157.112 25.3731 156.755 26.1695C156.383 26.9915 156.194 27.8837 156.2 28.7852Z"
        fill={color}
      />
      <path
        d="M195.511 58.7288H184.936V14.0148H195.511V17.3287C197.769 14.5007 200.846 13.086 204.743 13.0847C206.807 13.0711 208.849 13.5002 210.732 14.3428C212.546 15.1519 214.182 16.3078 215.549 17.7448C216.931 19.2087 218.013 20.9272 218.734 22.8038C219.502 24.7883 219.888 26.8986 219.873 29.025C219.892 31.133 219.505 33.2252 218.734 35.1886C218.007 37.0376 216.936 38.7337 215.578 40.1881C214.236 41.6212 212.616 42.7687 210.816 43.5614C208.939 44.3855 206.908 44.802 204.856 44.783C201.116 44.783 197.999 43.5045 195.507 40.9475V58.7403L195.511 58.7288ZM208.832 29.0154C208.836 28.1106 208.668 27.2133 208.336 26.3708C208.016 25.5534 207.528 24.8109 206.905 24.1903C206.273 23.5651 205.53 23.0624 204.714 22.7079C203.857 22.336 202.931 22.1478 201.997 22.1556C201.093 22.1455 200.197 22.3239 199.367 22.6792C198.566 23.0172 197.841 23.5115 197.235 24.1328C196.621 24.7662 196.126 25.5049 195.775 26.3133C195.405 27.1461 195.216 28.0473 195.22 28.9578C195.212 29.8565 195.392 30.747 195.746 31.5736C196.085 32.3712 196.582 33.093 197.206 33.6966C197.843 34.3078 198.585 34.8001 199.397 35.1502C200.235 35.5184 201.141 35.7067 202.057 35.7025C202.959 35.7091 203.854 35.5309 204.685 35.179C205.486 34.8402 206.211 34.3461 206.818 33.7253C207.427 33.098 207.921 32.3699 208.279 31.5736C208.646 30.7705 208.836 29.8979 208.833 29.0154"
        fill="#FFE800"
      />
      <path
        d="M248.021 14.0148H258.656V43.8433H248.021V40.5295C245.763 43.3601 242.705 44.7747 238.849 44.7734C236.782 44.7965 234.732 44.3902 232.831 43.5806C231.022 42.8011 229.392 41.6616 228.041 40.2322C226.658 38.7688 225.577 37.0502 224.858 35.1732C224.083 33.15 223.697 31.0001 223.719 28.8351C223.709 26.7591 224.085 24.6993 224.829 22.7597C225.529 20.9018 226.58 19.1944 227.925 17.7295C229.257 16.2909 230.867 15.1338 232.658 14.3274C234.568 13.4785 236.641 13.0525 238.733 13.079C242.474 13.079 245.571 14.3773 248.023 16.9739V14.0091L248.021 14.0148ZM234.7 28.8428C234.692 29.7701 234.871 30.6896 235.226 31.5468C235.561 32.3567 236.046 33.0965 236.656 33.7273C237.269 34.3544 238.005 34.8493 238.818 35.1809C239.68 35.5348 240.603 35.7128 241.535 35.7044C242.448 35.7127 243.353 35.5345 244.194 35.1809C245.007 34.8476 245.742 34.353 246.356 33.7273C246.965 33.0996 247.459 32.3715 247.817 31.5756C248.189 30.7528 248.378 29.86 248.372 28.9578C248.376 28.0473 248.187 27.1461 247.817 26.3133C247.464 25.5059 246.969 24.7676 246.356 24.1328C245.742 23.5071 245.007 23.0124 244.194 22.6792C243.352 22.3293 242.448 22.1513 241.535 22.1556C240.604 22.1511 239.681 22.329 238.818 22.6792C238.005 23.0115 237.269 23.5062 236.656 24.1328C236.055 24.7488 235.57 25.468 235.226 26.2557C234.871 27.072 234.692 27.9533 234.7 28.8428Z"
        fill="#FFE800"
      />
      <path
        d="M277.293 39.7739L262.803 14.0148H275.071L283.076 29.3069L290.847 14.0148H303L278.929 58.7288H267.067L277.293 39.7739Z"
        fill="#FFE800"
      />
      <path
        d="M245.52 55.4878C245.52 54.2763 245.036 53.1144 244.176 52.2577C243.315 51.401 242.147 50.9198 240.93 50.9198C240.326 50.9187 239.728 51.0368 239.17 51.2672C238.612 51.4977 238.105 51.8358 237.679 52.2622L237.664 52.2814L237.635 52.314L237.593 52.3581L237.537 52.4156L237.467 52.4846C237.441 52.5115 237.412 52.5364 237.385 52.5652L237.288 52.6553C237.252 52.6898 237.213 52.7205 237.178 52.757C237.144 52.7934 237.094 52.8279 237.055 52.8663C237.017 52.9046 236.961 52.9411 236.918 52.9852L236.901 52.9986C236.832 53.0446 236.776 53.1041 236.708 53.1539C236.641 53.2038 236.568 53.2652 236.496 53.3189C236.425 53.3726 236.346 53.432 236.271 53.4876C236.196 53.5432 236.113 53.6027 236.032 53.6602C235.951 53.7177 235.864 53.7753 235.781 53.8366C235.699 53.898 235.604 53.9536 235.517 54.0169C235.431 54.0802 235.325 54.1339 235.24 54.2087C235.155 54.2835 235.047 54.3257 234.951 54.4005C234.855 54.4753 234.745 54.5174 234.648 54.5922C234.552 54.667 234.435 54.7073 234.334 54.784C234.234 54.8607 234.111 54.8972 234.009 54.9662C233.907 55.0352 233.804 55.0774 233.702 55.1311C233.6 55.1848 233.454 55.2577 233.328 55.3229C233.203 55.3881 233.07 55.4475 232.943 55.5147C232.816 55.5818 232.677 55.6355 232.546 55.7064C232.415 55.7774 232.271 55.8234 232.136 55.8886C231.992 55.9401 231.851 55.9997 231.714 56.067C231.565 56.1188 231.421 56.1744 231.28 56.2396C231.129 56.2877 230.98 56.3434 230.835 56.4064C230.679 56.4509 230.526 56.5047 230.376 56.5675C230.217 56.6097 230.06 56.6609 229.906 56.7209C229.851 56.7363 229.795 56.7535 229.739 56.7727C229.568 56.8136 229.399 56.8642 229.234 56.9242C229.059 56.9616 228.886 57.0096 228.717 57.068C228.539 57.1019 228.362 57.1468 228.189 57.2023C228.007 57.232 227.827 57.2737 227.65 57.3269C227.464 57.3535 227.28 57.3913 227.099 57.4401C226.909 57.4629 226.721 57.4968 226.536 57.5417C226.342 57.5598 226.149 57.5899 225.958 57.6319C225.764 57.6457 225.571 57.672 225.38 57.7105C225.179 57.7195 224.979 57.7412 224.781 57.7757C224.652 57.7757 224.526 57.7968 224.395 57.814C224.378 57.814 224.363 57.814 224.347 57.814C224.153 57.8215 223.96 57.8414 223.769 57.8735C223.727 57.8735 223.686 57.8601 223.644 57.8601C223.47 57.8676 223.296 57.8849 223.124 57.9118C223.054 57.9118 222.987 57.8907 222.917 57.8907C222.766 57.8983 222.616 57.9137 222.466 57.9368C222.368 57.9368 222.274 57.908 222.175 57.908C222.046 57.908 221.925 57.9349 221.79 57.9464C221.655 57.9579 221.542 57.908 221.405 57.908C221.305 57.908 221.212 57.931 221.114 57.9368C220.964 57.9137 220.814 57.8983 220.663 57.8907C220.592 57.8907 220.526 57.908 220.455 57.9118C220.282 57.8848 220.109 57.8675 219.934 57.8601C219.892 57.8601 219.852 57.8716 219.807 57.8735C219.616 57.8414 219.423 57.8215 219.229 57.814C219.212 57.814 219.198 57.814 219.181 57.814C219.056 57.7968 218.929 57.7834 218.796 57.7757C218.598 57.7411 218.397 57.7194 218.196 57.7105C218.006 57.672 217.812 57.6457 217.618 57.6319C217.428 57.5889 217.235 57.5588 217.04 57.5417C216.855 57.4951 216.667 57.4612 216.478 57.4401C216.297 57.3906 216.112 57.3528 215.926 57.3269C215.749 57.2746 215.569 57.2329 215.387 57.2023C215.214 57.1468 215.038 57.1019 214.859 57.068C214.69 57.01 214.517 56.962 214.343 56.9242C214.177 56.8639 214.009 56.8133 213.838 56.7727C213.782 56.7535 213.728 56.7382 213.67 56.7209C213.516 56.6609 213.359 56.6097 213.2 56.5675C213.05 56.5058 212.897 56.452 212.741 56.4064C212.597 56.3412 212.446 56.2914 212.296 56.2396C212.146 56.1878 212.011 56.1188 211.863 56.067C211.725 56.0005 211.584 55.941 211.441 55.8886C211.306 55.8234 211.173 55.7601 211.03 55.7064C210.888 55.6527 210.77 55.5741 210.633 55.5147C210.496 55.4552 210.381 55.3785 210.248 55.3229C210.115 55.2673 210.005 55.1848 209.874 55.1311C209.772 55.0774 209.681 55.0122 209.568 54.9662C209.454 54.9202 209.35 54.8454 209.242 54.784C209.134 54.7226 209.034 54.6613 208.928 54.5922C208.822 54.5232 208.735 54.4676 208.625 54.4005C208.516 54.3333 208.433 54.2758 208.336 54.2087C208.24 54.1416 208.155 54.086 208.061 54.0169C207.966 53.9479 207.887 53.8942 207.797 53.8366C207.706 53.7791 207.633 53.7158 207.546 53.6602C207.46 53.6046 207.39 53.5394 207.307 53.4876C207.225 53.4358 207.161 53.3687 207.082 53.3189C207.003 53.269 206.945 53.2038 206.868 53.1539C206.791 53.1041 206.745 53.0446 206.675 52.9986L206.658 52.9833C206.616 52.9411 206.566 52.9065 206.521 52.8644C206.477 52.8222 206.438 52.7934 206.398 52.755C206.357 52.7167 206.325 52.6879 206.288 52.6534L206.192 52.5633L206.109 52.4827L206.039 52.4137L205.984 52.3562L205.941 52.312L205.912 52.2794C205.908 52.2733 205.902 52.2675 205.897 52.2622C205.471 51.8358 204.964 51.4977 204.406 51.2672C203.849 51.0368 203.25 50.9187 202.646 50.9198C202.043 50.9195 201.446 51.0375 200.889 51.267C200.332 51.4965 199.826 51.8329 199.4 52.2572C198.974 52.6814 198.636 53.1851 198.405 53.7394C198.175 54.2937 198.056 54.8879 198.056 55.4878C198.056 56.0884 198.175 56.6831 198.406 57.2377C198.638 57.7923 198.977 58.2958 199.405 58.7192L199.419 58.7326L199.449 58.7633L199.498 58.8113L199.561 58.8726L199.642 58.9513C199.673 58.9839 199.708 59.0126 199.74 59.0433C199.773 59.074 199.817 59.1123 199.854 59.1488C199.891 59.1852 199.943 59.2274 199.985 59.2677C200.027 59.308 200.085 59.354 200.133 59.4C200.182 59.446 200.243 59.494 200.297 59.5438C200.351 59.5937 200.421 59.6455 200.478 59.6992C200.689 59.9131 200.92 60.1058 201.168 60.2745C201.238 60.3263 201.299 60.3876 201.372 60.4356C201.446 60.4835 201.515 60.5564 201.594 60.6063C201.673 60.6561 201.748 60.7309 201.833 60.7865C201.918 60.8421 201.999 60.9169 202.089 60.9783C202.18 61.0397 202.268 61.1125 202.363 61.1701C202.457 61.2276 202.556 61.3082 202.654 61.3618C202.752 61.4155 202.847 61.5038 202.962 61.569C203.078 61.6342 203.176 61.7147 203.288 61.7818C203.4 61.849 203.513 61.9295 203.631 61.9985C203.748 62.0676 203.868 62.1481 203.991 62.221C204.116 62.3023 204.244 62.3772 204.377 62.4454C204.502 62.5317 204.637 62.5988 204.762 62.6736C205.016 62.848 205.287 62.9965 205.571 63.1166C205.71 63.1914 205.845 63.2738 205.991 63.3352C206.133 63.4157 206.279 63.4887 206.429 63.5538C206.576 63.6355 206.728 63.7085 206.883 63.7724C207.037 63.8544 207.195 63.9267 207.357 63.9892C207.517 64.0705 207.681 64.1422 207.849 64.2039C208.014 64.2855 208.184 64.3566 208.358 64.4168C208.528 64.4981 208.704 64.5686 208.884 64.6278C209.061 64.7087 209.243 64.7779 209.429 64.8349C209.612 64.9146 209.8 64.9825 209.992 65.0382C210.18 65.1148 210.373 65.1789 210.57 65.2299C210.863 65.3567 211.169 65.4525 211.483 65.5157C211.681 65.5873 211.884 65.6444 212.09 65.6863C212.294 65.7555 212.503 65.81 212.714 65.8494C212.924 65.9167 213.139 65.9686 213.356 66.0047C213.572 66.0706 213.793 66.12 214.017 66.1524C214.239 66.216 214.466 66.2622 214.695 66.2904C214.924 66.3511 215.157 66.394 215.393 66.4189C215.628 66.4767 215.867 66.5158 216.108 66.5359C216.348 66.5912 216.593 66.6272 216.84 66.6433C217.087 66.696 217.337 66.7275 217.589 66.7373C217.902 66.8037 218.22 66.8371 218.539 66.837C218.555 66.838 218.572 66.838 218.588 66.837C218.802 66.8744 219.019 66.8962 219.237 66.9022C219.279 66.9022 219.32 66.8907 219.364 66.8888C219.555 66.9209 219.748 66.9407 219.942 66.9482C220.013 66.9482 220.079 66.931 220.148 66.9271C220.321 66.9541 220.494 66.9714 220.669 66.9789C220.769 66.9789 220.861 66.9559 220.96 66.9501C221.109 66.9733 221.259 66.9886 221.41 66.9962C221.54 66.9962 221.661 66.9693 221.796 66.9578C221.931 66.9463 222.042 66.9962 222.181 66.9962C222.332 66.9886 222.483 66.9733 222.632 66.9501C222.73 66.9501 222.825 66.9789 222.923 66.9789C223.097 66.9713 223.271 66.9541 223.443 66.9271C223.513 66.9271 223.58 66.9482 223.65 66.9482C223.843 66.9407 224.036 66.9209 224.228 66.8888C224.27 66.8888 224.31 66.9022 224.355 66.9022C224.573 66.8961 224.79 66.8743 225.004 66.837C225.022 66.837 225.037 66.837 225.052 66.837C225.372 66.8361 225.69 66.8027 226.002 66.7373C226.255 66.7257 226.506 66.6943 226.754 66.6433C227 66.6273 227.245 66.5914 227.486 66.5359C227.727 66.5156 227.966 66.4765 228.201 66.4189C228.436 66.3939 228.67 66.3509 228.898 66.2904C229.128 66.2614 229.354 66.2153 229.577 66.1524C229.801 66.12 230.021 66.0706 230.238 66.0047C230.455 65.969 230.67 65.9171 230.879 65.8494C231.091 65.81 231.3 65.7555 231.504 65.6863C231.709 65.6426 231.912 65.5856 232.111 65.5157C232.424 65.4525 232.73 65.3567 233.024 65.2299C233.221 65.1792 233.414 65.1151 233.602 65.0382C233.794 64.9833 233.982 64.9154 234.165 64.8349C234.351 64.7779 234.533 64.7087 234.71 64.6278C234.89 64.5686 235.065 64.4981 235.236 64.4168C235.41 64.3561 235.58 64.285 235.745 64.2039C235.913 64.1422 236.077 64.0705 236.236 63.9892C236.398 63.9259 236.556 63.8536 236.71 63.7724C236.866 63.7085 237.018 63.6355 237.165 63.5538C237.315 63.4887 237.461 63.4157 237.602 63.3352C237.746 63.2696 237.886 63.1966 238.022 63.1166C238.306 62.996 238.577 62.8476 238.832 62.6736C238.965 62.5988 239.102 62.5317 239.217 62.4454C239.333 62.3591 239.475 62.3054 239.603 62.221C239.73 62.1366 239.847 62.081 239.963 61.9985C240.078 61.9161 240.196 61.8605 240.306 61.7818C240.416 61.7032 240.525 61.6457 240.631 61.569C240.737 61.4923 240.84 61.4347 240.94 61.3618C241.04 61.289 241.132 61.2314 241.231 61.1701C241.329 61.1087 241.423 61.0416 241.504 60.9783C241.585 60.915 241.674 60.8536 241.761 60.7865C241.847 60.7194 241.919 60.6676 242 60.6063C242.081 60.5449 242.146 60.4912 242.221 60.4356C242.296 60.38 242.356 60.3263 242.425 60.2745C242.674 60.1058 242.905 59.9131 243.115 59.6992C243.175 59.6455 243.241 59.6014 243.296 59.5438C243.352 59.4863 243.408 59.4518 243.46 59.4C243.512 59.3482 243.562 59.3156 243.609 59.2677C243.655 59.2197 243.697 59.191 243.74 59.1488C243.782 59.1066 243.817 59.0797 243.853 59.0433C243.89 59.0069 243.919 58.9839 243.952 58.9513L244.032 58.8726L244.096 58.8113L244.144 58.7633L244.175 58.7326L244.189 58.7192C244.617 58.2956 244.956 57.7918 245.188 57.2368C245.419 56.6819 245.538 56.0868 245.537 55.4859"
        fill="#FFE800"
      />
    </svg>
  );
};

export default Logo;
