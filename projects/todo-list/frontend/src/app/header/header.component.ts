import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiBadge, TuiStatus } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TuiNavigation,
    TuiIcon,
    TuiBadge,
    TuiStatus,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
