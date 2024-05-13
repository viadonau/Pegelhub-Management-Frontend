import { Contact } from "@shared/domain/models/contact.model";

export interface Connector {
    id: string;
    manufacturer: Contact;
    typeDescription: string;
    softwareVersion: string;
    worksFromDataVersion: string;
    dataDefinition: string;
    softwareManufacturer: Contact;
    technicallyResponsible: Contact;
    operatingCompany: Contact;
    nodes: string;
}