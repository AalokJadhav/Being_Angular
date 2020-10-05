import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customslice'
})
export class CustomSlice implements PipeTransform {
    transform(value: string, args: any) {
        if (!value) {
            return null;
        }
        return value.slice(0, 20);
    }

}
