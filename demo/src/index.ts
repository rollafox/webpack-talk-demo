import * as $ from 'jquery';
import { getResources, ResourceArray} from './resource';

import './styles.scss';

$(document).ready(function(){
    $.each(ResourceArray, function(i, item){
        $('body').append(item + "<br>")
    })
});

