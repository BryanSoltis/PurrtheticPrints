import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

import { Testimonial } from './testimonial.class';

export class Poster extends ContentItem {
  public title: Fields.TextField;
  public releasedate: Fields.DateTimeField;
  public posterimage: Fields.AssetsField;
  public description: Fields.TextField;
  public category: Fields.MultipleChoiceField;
  public testimonials: Testimonial[];

  constructor() {
    super({
      linkResolver: (link) => {
        return 'posters/' + link.url_slug;
      }
    })
  }

  getCategories(): string {
    if (!this.category) {
      return null;
    }
    return '<ul><li>' + this.category.options.map(m => m.name).join('</li><li>') + '</li></ul>';
  }

  getTestimonials(): string {
    if (!this.testimonials) {
        return null;
    }
    return '<ul><li>' + this.testimonials.map(testimonial => testimonial.getTestimonialText()).join('</li><li>') + '</li></ul>';
  }
}

