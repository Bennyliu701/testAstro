// document.querySelector('.hamburger').addEventListener('click', () => {
//   console.log('hamburger click 11', 11)
//   document.querySelector('.nav-links').classList.toggle('expanded');
// });

// 为了在导航到新页面后使移动菜单具有交互性，请添加以下代码，该代码监听astro:page-load事件，该事件在页面导航结束时运行，并在响应时运行现有脚本，使汉堡菜单在点击时能够正常工作：
document.addEventListener('astro:page-load', () => {
  console.log('astro:page-load', 1)
  document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('hamburger click 11', 11)
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
});
