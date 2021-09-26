//import RadioButtons from './RadioButtons'
import CheckboxGroup from "./CheckboxGroup";

// Formic Controlls
function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		//   case 'radio':
		// return <RadioButtons {...rest} />
		case "checkbox":
			return <CheckboxGroup {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;
