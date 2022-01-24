import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition('* <=> *', [
            // Set default style for enter and leave
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':leave', style({ opacity: 1 }), { optional: true }),

            group([
                // Animate the new page coming in
                query(':leave', [
                    animate('600ms ease', style({ opacity: 0 }))
                ], { optional: true }),

                // Animate the new page coming in
                query(':enter', [
                    animate('600ms ease', style({ opacity: 1 }))
                ], { optional: true })
            ])
        ])
    ]);