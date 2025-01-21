
function Footer() {
	return (
	  <div className="mx-auto w-1/4 py-4 text-center border-t border-muted">
		<p className="text-sm mt-2 opacity-50">
		  &copy; {new Date().getFullYear()} Erik Svensson Nokrach. All rights reserved.
		</p>
	  </div>
	);
  }
  
  export default Footer;