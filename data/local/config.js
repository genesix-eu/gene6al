cfg_ver=0.25;


//temp1 Linux

// function linux_home(){
// var my_linux_home = process.env['HOME'];
// run_command(my_linux_home , "1");
// }


// function linux_steam(){
// var my_steam_app = process.env['HOME']+/.local/share/Steam/steam.sh;
// run_command(my_steam_app , "1");
// }



switch (theme_mode) {
    case 1:
        sortable=1;
		auto_widht_height=1;
		css_theme_name='one_line';
        break;
    case 2:
        sortable=0;
		auto_widht_height=1;
        css_theme_name='two_line_grid';
		break;
    case 3:
        sortable=2;
		auto_widht_height=3;
        css_theme_name='unit_ed';
        break;
    case 4:
        sortable=2;
		auto_widht_height=3;
        css_theme_name='unit_ed_no_text';
        break;
    case 5:
        sortable=1;
		auto_widht_height=5;
		css_theme_name='one_line_no_text';
        break;
    case 6:
        sortable=1;
        auto_widht_height=1;
        css_theme_name='one_line_no_bg';
        break;
    case 7:
        sortable=1;
        auto_widht_height=5;
        css_theme_name='one_line_no_text_no_bg';
        break;
    case 8:
        sortable=2;
        auto_widht_height=3;
        css_theme_name='unit_ed_no_bg';
        break;
    case 9:
        sortable=2;
        auto_widht_height=3;
        css_theme_name='unit_ed_no_text_no_bg';
        break;
    case 10:
        sortable=1;
        auto_widht_height=5;
        css_theme_name='one_line_no_text_no_bg_4K';
        break;
    case 11:
        sortable=1;
        auto_widht_height=5;
        auto_move=2;
        css_theme_name='wannabe_b';
        break;
}



//$("head").append('<link rel="stylesheet" type="text/css" href="file:///' + my_css_folder + css_theme_name + '.css">');