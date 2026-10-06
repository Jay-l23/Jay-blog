// ============================================================
// 本地音乐歌单配置（不再依赖网易云 API）
// 把你的 mp3 文件放到 public/music/ 目录，封面放到 public/music/cover/
// 然后在下面增删条目即可，播放器会自动加载这里的歌单。
//
// 字段说明：
//   id        唯一数字，随便编
//   name      歌曲名
//   ar[].name 歌手
//   al.name   专辑名（没有就填空字符串）
//   al.picUrl 封面图路径，没有就用 /music/cover/default.jpg
//   url       mp3 文件访问路径（public 目录下的文件用 /music/ 开头）
// ============================================================
export default [
  {
    id: 1,
    name: "示例歌曲一",
    ar: [{ name: "歌手一" }],
    al: { name: "", picUrl: "/music/cover/default.jpg" },
    url: "/music/01.mp3"
  },
  {
    id: 2,
    name: "示例歌曲二",
    ar: [{ name: "歌手二" }],
    al: { name: "", picUrl: "/music/cover/default.jpg" },
    url: "/music/02.mp3"
  }
];
