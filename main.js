(function( $ ){
	
	$('.faq-list .question').click( function(){
		$(this).parent().find('.answer').slideToggle('fast');
		$(this).toggleClass('on');
		return false;
	});
	
});



var element = {
	select: document.querySelector(".burger-btn"),
	active: "active",
	className: function () {
	  return this.select.className;
	}
  };
  
  element.select.onclick = function () {
	var checker = hasClass(element.select, element.active);
  
	if (checker) {
	  removeClass(element.select, element.active);
	} else {
	  element.select.className = element.select.className + " active";
	}
  };
  
  function hasClass(elem, className) {
	return new RegExp(" " + className + " ").test(" " + elem.className + " ");
  }
  
  function removeClass(elem, className) {
	var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
	if (hasClass(elem, className)) {
	  while (newClass.indexOf(" " + className + " ") >= 0) {
		newClass = newClass.replace(" " + className + " ", " ");
	  }
	  elem.className = newClass.replace(/^\s+|\s+$/g, "");
	}
  }
  

document.querySelector('.openMenu').addEventListener('click',()=>{
document.querySelector('.nav-list').classList.toggle('active')
document.querySelector('.oval-btn').classList.toggle('active')
})

