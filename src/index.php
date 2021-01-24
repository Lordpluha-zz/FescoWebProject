<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="#" type="image/x-icon">

	<title>Fesco</title>

	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<link rel="stylesheet" href="js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.min.css">
	<script src="js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.concat.min.js"></script>   
	<script>
		(function($){
			$(window).load(function(){
				$("body").mCustomScrollbar({
					theme:"light-thin"
				});
			});
		})(jQuery);
	</script>
	<style>
		html, body{
			height: 100%;
		}
	</style> -->

	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="styles/css/style.min.css">
	<script src="js/preloader.js"></script>
	
</head>
<body>
	<!-- Preloader -->
	<div class="preloader active">
		<div class="sk-folding-cube">
			<div class="sk-cube sk-cube-1"></div>
			<div class="sk-cube sk-cube-2"></div>
			<div class="sk-cube sk-cube-4"></div>
			<div class="sk-cube sk-cube-3"></div>
		</div>
	</div>
	
	<!-- Web-Page -->
	<div id="wrapper">
		
		<nav>
			<div id="content">
				
				<div class="nav__brand">
					<div class="nav__logo">
						<h1>Fesco</h1>
					</div>
				</div>

				<div class="nav__navbar">
					
					<div class="navbar__elems">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Menu</a></li>
							<li><a href="#">Reservation</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>

				<div class="burger__navbar">
					<span></span>
				</div>

			</div>

		</nav>

		<header>
			
			<div id="content">
				<div class="header__content">
					<img src="img/header/Icon.png" alt="" class="header__ico">

					<h1>Making Food Taste Better.</h1>

					<h3>Italian Specialities</h3>

					<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
				</div>

				<div class="scroll_down circle">
					<a class="to_about_us" href="#about_us">
						<div class="arrow">
							
						</div>
					</a>
				</div>
			</div>			
		</header>

		<article>
				
			<div id="content">
				
				<section class="about_us">
					<!-- Scroll index -->
					<a href="#" name="about_us" class="index" id="about_us"></a>

					<div class="section__content">
						<div class="section__header">
							<h1 class="section__title">About Us</h1>
						</div>

						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>

						<p>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.</p>
						<p>Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, dictum porta.</p>
					</div>

					<aside>
						
						<div class="contact_info">
							<h3>Contact</h3>
							<p>Vestibulum ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia.</p>

							<div class="addr">
								<h6>Address:</h6>

								<p>17 Awesome Street, Belgrade</p>
								<p>SR 877900</p>

								<a href="#">view map</a>

								<div class="open_hours">
									<h6>OPENING HOURS:</h6>

									<p class="hours1">Monday - Friday........................8:00am - 11:00 pm</p>
									<p class="hours2">Saturday - Sunday......................8:00am - 10:00 pm</p>
								</div>

								<button class="Reservation">
									<a href="#">
										Table Reservation
									</a>
								</button>
							</div>
						</div>

						<div class="preview">
							<!-- bgimg -->
						</div>
					</aside>
				</section>

				<section class="our_sepialities">
					<div class="section__header">
						<h1 class="section__title">Our Specialities</h1>

						<p class="section__intro">
							Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla port or accumsan tincidunt.
						</p>
					</div>

					<div class="specs__menu">
						<div class="specs__elem">
							<div class="specs__preview">
								<img src="img/article/specs/" alt="">
							</div>

							<div class="spec__about">
								<p>Lasagna ............... 19.99$</p>
							</div>
						</div>

						<div class="specs__elem">
							<div class="specs__preview">
								<img src="img/article/specs/" alt="">
							</div>

							<div class="spec__about">
								<p>Lasagna ............... 19.99$</p>
							</div>
						</div>

						<div class="specs__elem">
							<div class="specs__preview">
								<img src="img/article/specs/" alt="">
							</div>

							<div class="spec__about">
								<p>Lasagna ............... 19.99$</p>
							</div>
						</div>

						<div class="specs__elem">
							<div class="specs__preview">
								<img src="img/article/specs/" alt="">
							</div>

							<div class="spec__about">
								<p>Lasagna ............... 19.99$</p>
							</div>
						</div>
					</div>					
				</section>

				<section class="our_menu">
					
					<div class="section__header">
						<h1 class="section__title">Our Menu</h1>

						<p class="section__intro"></p>						
					</div>

					<div class="pizzas">
						<h1 class="menu__title"><span class="decor_dots"></span>Pizza<span class="decor_dots"></span></h1>

						<div class="pizzas__list">
							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>

							<div class="pizza__type">
								<div class="pizza__about">
									<h1 class="pizza__name">Mexicana</h1>
									<p class="pizza__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>
								
								<h1 class="pizza__costs">$19</h1>
							</div>
						</div>
					</div>

					<div class="deserts">
						<h1 class="menu__title"><span class="decor_dots"></span>Desserts<span class="decor_dots"></span></h1>

						<div class="deserts__list">
							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>

							<div class="desert__type">
								<div class="desert__about">
									<h1 class="desert__name">Chocolate Hazelnut Chesseecake</h1>
									<p class="desert__descr">
										Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................
									</p>
								</div>

								<h1 class="desert__costs">$7</h1>
							</div>
						</div>
					</div>

					<button class="menu_more">
						<a href="#" class="more">View All Menu</a>
					</button>
				</section>

				<section class="book_a_table">
					


				</section>

			</div>

		</article>

		<footer>
			
			<div id="content">
				


			</div>

		</footer>
	</div>	

	<script src="js/script.js"></script>

</body>
</html>