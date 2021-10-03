import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../assets/img/theme/thebliss5.png";

const QuotationPDF = (event, quotation, company, profile, today, cost) => {
	const doc = new jsPDF("portrait", "px", "a4", false);

	// Heder=====
	doc.addImage(logo, "PNG", 40, 10, 50, 50);
	doc.setFont("Helvertica", "bold");
	doc.setTextColor(100);
	doc.text(100, 40, "THE BLISS");
	doc.setLineWidth(1.5);
	doc.line(30, 65, 420, 65);

	// Body=====
	doc.setFont("Monaco", "bold");
	doc.setTextColor("Lime");
	doc.setFontSize(20);
	doc.text(150, 90, "Quotation Criteria");
	doc.setFontSize(16);

	doc.setFont("Monaco", "bold");
	doc.setTextColor("Lime");
	doc.text(30, 130, company.company_name);
	doc.text(360, 130, "Quotaion");
	doc.setFont("Monaco", "Normal");
	doc.setTextColor("black");
	doc.setFontSize(14);
	doc.text(30, 150, `${profile.first_name} ${profile.last_name}`);
	doc.text(30, 165, `Ph : ${profile.mobile}`);

	doc.setFont("Monaco", "bold");
	doc.setTextColor("green");
	doc.setFontSize(14);
	doc.text(350, 150, profile.servic_provider_Id);

	doc.setFont("Monaco", "bold");
	doc.setFontSize(16);
	doc.setTextColor("Lime");
	doc.text(30, 185, "Quotaion to :");
	doc.text(325, 185, "Quotaion Details :");

	doc.setFont("Monaco", "bold");
	doc.setTextColor("black");
	doc.setFontSize(13);
	doc.text(30, 205, event.org_name);

	doc.setFontSize(12);
	doc.text(297, 205, "VALID FROM :");
	doc.setFont("Monaco", "Normal");
	doc.text(370, 205, today);

	doc.setFontSize(12);
	doc.text(30, 220, event.location);

	doc.setFont("Monaco", "bold");
	doc.setFontSize(12);
	doc.text(343, 220, "TO :");
	doc.setFont("Monaco", "Normal");
	doc.text(370, 220, quotation.date_to);
	doc.text(30, 235, event.cus_email);
	doc.text(30, 250, `Ph : ${event.cus_con_number}`);

	// define the columns we want and their titles
	let tableColumn = ["Item Description", "Quantity", "Unit Price", "Total"];
	// define an empty array of rows
	let tableRows = [];

	let items = quotation.quotation_details;

	items.forEach((item) => {
		let newItem = [
			item.item_name,
			item.quantity,
			item.unit_price,
			item.total_price,
		];
		// push each item info into a row
		tableRows.push(newItem);
	});

	// tableRows.push(["TOTAL VALUE ", " ", " ", cost]);

	doc.autoTable(tableColumn, tableRows, { startY: 280 });

	doc.setLineWidth(1.5);
	doc.line(30, 600, 420, 600);

	doc.setTextColor(100);
	doc.setFontSize(8);
	doc.text(30, 610, "©");
	doc.text(60, 610, "2021-10-20");
	doc.setTextColor("red");
	doc.text(75, 610, "COPYRIGHT");

	doc.setTextColor("black");
	doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
	doc.setTextColor("blue");
	doc.text(395, 610, "Hex Clan");

	doc.addPage();

	doc.addImage(logo, "PNG", 40, 10, 50, 50);
	doc.setFont("Helvertica", "bold");
	doc.setTextColor(100);
	doc.text(100, 40, "THE BLISS");
	doc.setLineWidth(1.5);
	doc.line(30, 65, 420, 65);

	doc.setFontSize(15);
	doc.setFont("Monaco", "bold");
	doc.setTextColor("Lime");
	doc.text(30, 100, "Terms And Condition");

	doc.setFontSize(13);
	doc.setFont("Monaco", "bold");
	doc.setTextColor("black");
	doc.text(30, 120, quotation.terms);

	doc.setLineWidth(1.5);
	doc.line(30, 600, 420, 600);

	doc.setTextColor(100);
	doc.setFontSize(8);
	doc.text(50, 610, "©");
	doc.text(60, 610, "yr");
	doc.setTextColor("red");
	doc.text(75, 610, "COPYRIGHT");

	doc.setTextColor("black");
	doc.text(310, 610, "* ALL RIGHTS RESERVED BY");
	doc.setTextColor("blue");
	doc.text(395, 610, "Hex Clan");

	const date = Date().split(" ");
	// we use a date string to generate our filename.
	const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

	doc.save(`quotation_criteria${dateStr}.pdf`);
};

export default QuotationPDF;
