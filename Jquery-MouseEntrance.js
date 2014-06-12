/*
 * Author : Jonathan Affre
 * Jquery Plug-in.
 * Version : 1.0.0
 */
(function($)
{
    $.fn.detectMouseEntrance = function(event)
    {
        /** Width et Height de la div sur laquelle on applique la fonction **/
        var $elem = $(this);
        var w = $elem.width();
        var h = $elem.height();
        var offset = $elem.offset();
        /** Calcul de X et Y pour avoir un angle en direction du centre de la div **/
        var x = (event.pageX - offset.left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (event.pageY - offset.top - (h / 2)) * (h > w ? (w / h) : 1);
        
        /*
         * Calcul de l'angle de pointe, ajouter 180 degrés pour se débarasser des valeurs négatives
         * On divise par 90 pour obtenir le quadrant (horaire)
         * +3 %4 pour déplacer le quadrant à l'heure voulu(ici l'entrée de la souris)
         */
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        
        switch (direction) {
            case 0:
                return 'top';
                break;
            case 1:
                return 'right';
                break;
            case 2:
                return 'bottom';
                break;
            case 3:
                return 'left';
                break;
        }
    };
})(jQuery);
