import {
  Container,
  Section,
  AddContactForm,
  ContactsList,
  Filter,
} from 'components';

export function ContactsPage() {
  return (
    <Container>
      <h1>Your Contacts</h1>
      <Section>
        <AddContactForm />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}
