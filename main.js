$liTags = $('ul>li')
for (let i = 0; i < $liTags.length; i++) {
  $($liTags[i]).on('click', function (e) {
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    let index = $(e.currentTarget).index()
    $('.slide').css({transform: `translateX(${-index*600}px)`})
  })
}