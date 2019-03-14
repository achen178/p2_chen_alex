
<style type="text/css" media="screen">
*{
  margin: 0;
  padding: 0;
  border: 0;
}
body{
  background-color: #423842;
  font-family: "Noto Sans", sans-serif;
  color: white;
}
header a{
  text-decoration: none;
  color:inherit;
  font-size: 12px;
  letter-spacing: .2em;
  transition: text-decoration .3s ease-in-out;
  position: relative;
  cursor: pointer;
}
/* Note: this is not my personal css but I was looking up a fun hover effect to try */
header a:before, header a:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 1px;
  top: 50%;
  margin-top: -0.5px;
  background: white;
}

header a:before {
  left: -2.5px;
}
header a:after {
  right: 2.5px;
  background: white;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

header a:hover:before {
  background: white;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

header a:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
}
/* End of copy/pasted code */
nav{
  text-align: center;
}
nav li{
  display: inline-block;
  width: 100px;
  margin: 10px 25px;
  padding: 10px;
  background: #423842;
}
h1{
  text-align: center;
  margin-bottom: 20px;
  font-family: "Mr De Haviland", cursive;
  font-size: 50px;
  color: white;
  letter-spacing: .2em;
}
p{
  margin-bottom: 20px;
  font-size: 12px;
}
p::before{
  content: "> > ";
  font-weight: bold;
}
.container{
  width: 400px;
}
</style>
<div class="container">
  <h1>Thank you for sending a message</h1>
  <p>Thanks for your interest. I have received your message, and will be in touch shortly.</p>
  <p>Form processor provided by <a href="http://www.inventpartners.com">Invent Partners web design York</a>.</p>
</div>
