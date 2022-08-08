import { PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'sign'})
export class AddSignPipe implements PipeTransform{

  transform(value: number): string {
      if(value < 0){
        return `${value}`;
      } else {
        return `+${value}`;
      }
  }
}
