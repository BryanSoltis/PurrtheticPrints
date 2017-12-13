import { ContentItem, Fields} from 'kentico-cloud-delivery-typescript-sdk';

export class Testimonial extends ContentItem {
  public testimonialname: Fields.TextField;
  public testimonialdate: Fields.DateTimeField;
  public testimonialtext: Fields.TextField;

  constructor() {
    super({
    })
  }


  public getTestimonialText(): string {
        return `${this.testimonialtext.value} <br /><i>&nbsp;&nbsp; ${this.testimonialdate.datetime.getMonth()}/${this.testimonialdate.datetime.getFullYear()} - ${this.testimonialname.value}</i>`;
      }
}

