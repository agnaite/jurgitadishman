$(function () {

  //~~~~~~~ exhibits ~~~~~~~~

  Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i=54; i>0; i--)
        if (i !== 23) { accum += block.fn(i); }
    return accum;
  });

  // Grab the template script
  var theTemplateScript = $("#exhibit-carousel-img").html();
  
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Add the compiled html to the page
  $('.exhibit-img-placeholder').prepend(theTemplate);
});
