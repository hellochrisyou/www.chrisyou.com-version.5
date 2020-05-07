import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'spaceAfterPeriod' })
export class SpaceAfterPeriodPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/[.]/g, '.  ');
    }
}