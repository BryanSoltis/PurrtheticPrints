// kentico cloud
import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';

// models
import { Poster } from '../models/poster.class';
import { Testimonial } from '../models/testimonial.class';

export function DeliveryClientFactory() {

    // let projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';
    let projectId = 'a62fb51d-03da-499d-a8df-23255b4e599f';

    let typeResolvers: TypeResolver[] = [
        new TypeResolver("poster", () => new Poster()),
        new TypeResolver("testimonial", () => new Testimonial())
    ];

    return new DeliveryClient(
        new DeliveryClientConfig(projectId, typeResolvers)
    )
};

export var DeliveryClientProvider =
    {
        provide: DeliveryClient,
        useFactory: DeliveryClientFactory,
        deps: []
    };
