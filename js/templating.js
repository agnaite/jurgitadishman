$(function () {

  //~~~~~~~ exhibits ~~~~~~~~

  // var data = {"data": range(1, 42)};
  // console.log(data);

  Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i=2; i<n; i++)
        if (i !== 23) { accum += block.fn(i); }
    return accum;
  });

  // Grab the template script
  var theTemplateScript = $("#exhibit-carousel-img").html();
  
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Pass our data to the template
  // var theCompiledHtml = theTemplate(data);

  // Add the compiled html to the page
  $('.exhibit-img-placeholder').prepend(theTemplate);
});


// HELPERS

function range(start, end)
{
    var dict = {images:[]};
    
    for(var i=start; i<end; i++)
    {
        dict.images.push(i);
    }
    return dict;
}