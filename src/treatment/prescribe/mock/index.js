
const unitOptions = [
    { value: 'tablet', label: 'Viên' },
    { value: 'bottle', label: 'Chai' },
    { value: 'pack', label: 'Gói' },
    { value: 'tube', label: 'Ống' },
  ];

  const frequencyOptions = [
    { value: 'once_daily', label: '1 lần/ngày' },
    { value: 'twice_daily', label: '2 lần/ngày' },
    { value: 'three_daily', label: '3 lần/ngày' },
    { value: 'four_daily', label: '4 lần/ngày' },
    { value: 'when_needed', label: 'Khi cần' },
  ];

  const timingOptions = [
    { value: 'before_meal', label: 'Trước ăn' },
    { value: 'after_meal', label: 'Sau ăn' },
    { value: 'with_meal', label: 'Trong bữa ăn' },
    { value: 'empty_stomach', label: 'Lúc đói' },
    { value: 'anytime', label: 'Không phụ thuộc bữa ăn' },
  ];

  const routeOptions = [
    { value: 'oral', label: 'Uống' },
    { value: 'injection', label: 'Tiêm' },
    { value: 'topical', label: 'Bôi ngoài da' },
    { value: 'inhale', label: 'Hít' },
  ];

  const dosageOptions = [
    { value: 'one_tablet', label: '1 viên' },
    { value: 'two_tablets', label: '2 viên' },
    { value: 'three_tablets', label: '3 viên' },
    { value: 'half_tablet', label: '1/2 viên' },
    { value: 'one_ml', label: '1 ml' },
    { value: 'two_ml', label: '2 ml' },
    { value: 'three_ml', label: '3 ml' },
    { value: 'one_teaspoon', label: '1 thìa cà phê' },
    { value: 'one_tablespoon', label: '1 thìa canh' },
    { value: 'as_directed', label: 'Theo chỉ định' },
  ];
  
export {unitOptions, frequencyOptions, timingOptions, routeOptions, dosageOptions}