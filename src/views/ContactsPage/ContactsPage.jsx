import { Container, Section, AddContactForm, ContactsList } from 'components';

export function ContactsPage() {
  return (
    <Container>
      <h1>Your Contacts</h1>
      <Section>
        <AddContactForm />
      </Section>
      <Section>
        <ContactsList />
      </Section>
    </Container>
  );
}
