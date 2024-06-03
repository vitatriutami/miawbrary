import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col justify-center space-y-8 px-10">
        <h1 className="text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Miawbrary?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              repellat sed ipsam perspiciatis unde aspernatur ex dolor eius
              tempore mollitia, cupiditate tenetur aliquid! Sapiente quasi alias
              laboriosam tempora a? Eligendi?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I borrow the books? What is the requirements?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio minima dolor impedit magnam aspernatur quidem accusamus quod
              ab fugit exercitationem, non odio? Molestias expedita iste error
              ea sint quisquam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              I see a link that says, 'Add to Reading List'. What is a reading
              list, and how does it work?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio minima dolor impedit magnam aspernatur quidem accusamus quod
              ab fugit exercitationem, non odio? Molestias expedita iste error
              ea sint quisquam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What does ISBN mean?</AccordionTrigger>
            <AccordionContent>
              An acronym for International Standard Book Number, an ISBN is a
              13-digit book identifier that is unique to every edition and book
              published by each publisher. For instance, a paperback and a
              hardcover edition of the same book published by different
              publishers will each have a different ISBN. Flip to the back of
              any book and you will find its ISBN indicated above the barcode.
              If you have the ISBN of a book you might be searching for, simply
              pass it to a staff at your local bookstore and they will search
              for it through their system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              I am a bookstagrammer, and I would like to review your books. How
              can I be part of your group of reviewers?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio minima dolor impedit magnam aspernatur quidem accusamus quod
              ab fugit exercitationem, non odio? Molestias expedita iste error
              ea sint quisquam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              I run a retail store and I would like to find out more about your
              books and services! Who can I contact?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio minima dolor impedit magnam aspernatur quidem accusamus quod
              ab fugit exercitationem, non odio? Molestias expedita iste error
              ea sint quisquam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
