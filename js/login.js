  // $('.tab a').on('click', function (e) {
    
  //   e.preventDefault();
    
  //   $(this).parent().addClass('active');
  //   $(this).parent().siblings().removeClass('active');
    
  //   target = $(this).attr('href');
  
  //   $('.tab-content > div').not(target).hide();
    
  //   $(target).fadeIn(600);
    
  // });

  document.querySelector('#btnRegistrarse').addEventListener('click', function (e) {
    
    document.querySelector('#btnRegistrarse').parentNode.classList.add('active');
    document.querySelector('#btnEntrar').parentNode.classList.remove('active');
  
    document.querySelector('#entrar').style.display = 'none';
    document.querySelector('#registrarse').style.display = 'initial';
    
  });

  document.querySelector('#btnEntrar').addEventListener('click', function (e) {
    
    document.querySelector('#btnEntrar').parentNode.classList.add('active');
    document.querySelector('#btnRegistrarse').parentNode.classList.remove('active');
  
    document.querySelector('#registrarse').style.display = 'none';
    document.querySelector('#entrar').style.display = 'initial';
    
  });