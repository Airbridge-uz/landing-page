import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion as BaseAccordion,
} from "@/components/ui/accordion";

interface Props {
	data: {
		title: string;
		description: string;
	}[];
}

export function Accordion({ data }: Props) {
	return (
		<BaseAccordion type="single" collapsible className="w-full">
			{data.map((item, i) => {
				return (
					<AccordionItem key={item.title} value={`item-${i.toFixed()}`}>
						<AccordionTrigger>{item.title}</AccordionTrigger>
						<AccordionContent>{item.description}</AccordionContent>
					</AccordionItem>
				);
			})}
		</BaseAccordion>
	);
}
