bgr=100;bgg=100;bgb=100;bga=0;
dev_mode=1;
pp_mode=1;
colombo=1;
all_widgets=0;
old_settings=0;
cmd=0;
e3dlogo=0;
motivation=0;
loaded=1;
theme_mode=7;
sortable=0;
auto_widht_height=1;
auto_move=1;
cfg_ver=0.20;





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