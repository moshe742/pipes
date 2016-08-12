import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: 'afterwhere'
})

export class AfterWherePipe implements PipeTransform {
	transform(value: any[], needle: any):any[] {
		needle = JSON.stringify(needle);
		let arr = new Array(value.length);
		for (let i = 0; i < value.length; ++i) {
			arr[i] = JSON.stringify(value[i]);
			if (arr[i].includes(needle.substring(1, needle.length - 2))) {
				alert("hello");
				return value.slice(i);
			}
		}
		return [];
	}
}