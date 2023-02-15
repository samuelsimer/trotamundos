const {
    host, hostname, href, origin, pathname, port, protocol, search
  } = window.location
  if(pathname === "/trotamundos/html/registro.php" && localStorage.getItem('token') !==null){
    
    window.location.replace("index.php");

}