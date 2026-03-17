export interface MenuItem {
  id: string;
  name_ar: string;
  desc: string;
  price: number;
  category: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name_ar: string;
  category: string;
  rating: number;
  time: string;
  image: string;
  menu: MenuItem[];
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name_ar: 'كشري الزعيم',
    category: 'كشري',
    rating: 4.8,
    time: '20-30',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800',
    menu: [
      { id: 'm1', name_ar: 'علبة كشري جامبو', price: 45, desc: 'أرز، مكرونة، عدس، حمص، بصل مقرمش، صلصة', category: 'الرئيسية', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400' },
      { id: 'm2', name_ar: 'طاجن لحمة مفرومة', price: 60, desc: 'مكرونة فرن باللحمة المفرومة والصلصة', category: 'طواجن', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400' },
      { id: 'm3', name_ar: 'كشري وسط', price: 30, desc: 'أرز، مكرونة، عدس، صلصة', category: 'الرئيسية', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400' },
      { id: 'm4', name_ar: 'مشروب غازي', price: 10, desc: 'بيبسي أو كوكاكولا', category: 'مشروبات', image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?q=80&w=400' },
    ]
  },
  {
    id: '2',
    name_ar: 'شاورما أبو أنس',
    category: 'سوري',
    rating: 4.9,
    time: '15-25',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800',
    menu: [
      { id: 'm5', name_ar: 'فتة شاورما دجاج', price: 120, desc: 'أرز بسمتي، شاورما دجاج، ثومية، خبز محمص', category: 'الرئيسية', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=400' },
      { id: 'm6', name_ar: 'ساندوتش شاورما صاج', price: 65, desc: 'شاورما، ثومية، مخلل', category: 'ساندوتشات', image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=400' },
      { id: 'm7', name_ar: 'فتة حمص', price: 40, desc: 'حمص، طحينة، خبز محمص، زيت زيتون', category: 'مقبلات', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=400' },
      { id: 'm8', name_ar: 'عصير ليمون بالنعناع', price: 20, desc: 'ليمون طازج مع نعناع', category: 'مشروبات', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=400' },
    ]
  },
  {
    id: '3',
    name_ar: 'بيتزا المنيو',
    category: 'بيتزا',
    rating: 4.5,
    time: '25-40',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
    menu: [
      { id: 'm9', name_ar: 'بيتزا مارجريتا', price: 80, desc: 'صلصة طماطم، موتزاريلا، ريحان', category: 'بيتزا', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400' },
      { id: 'm10', name_ar: 'بيتزا بيبروني', price: 100, desc: 'صلصة طماطم، موتزاريلا، بيبروني', category: 'بيتزا', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400' },
      { id: 'm11', name_ar: 'بيتزا سوبريم', price: 120, desc: 'خضار مشكل، لحم، جبنة', category: 'بيتزا', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400' },
      { id: 'm12', name_ar: 'باستا ألفريدو', price: 75, desc: 'مكرونة بصوص الكريمة والدجاج', category: 'باستا', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=400' },
    ]
  },
  {
    id: '4',
    name_ar: 'مشويات الخليج',
    category: 'مشويات',
    rating: 4.7,
    time: '30-45',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
    menu: [
      { id: 'm13', name_ar: 'مشكل مشويات', price: 180, desc: 'كباب، كفتة، ريش، فراخ مشوية', category: 'مشويات', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400' },
      { id: 'm14', name_ar: 'كباب حلة', price: 90, desc: 'لحمة بتلو مع خضار وصلصة', category: 'مشويات', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=400' },
      { id: 'm15', name_ar: 'فراخ مشوية نص', price: 70, desc: 'نص فرخة مشوية بالتتبيلة', category: 'مشويات', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=400' },
      { id: 'm16', name_ar: 'سلطة خضراء', price: 15, desc: 'خس، طماطم، خيار، جزر', category: 'سلطات', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400' },
    ]
  },
  {
    id: '5',
    name_ar: 'فطاطري السلطان',
    category: 'فطاطري',
    rating: 4.6,
    time: '20-30',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800',
    menu: [
      { id: 'm17', name_ar: 'فطيرة لحمة', price: 50, desc: 'عجينة مقرمشة باللحمة المفرومة', category: 'فطائر', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400' },
      { id: 'm18', name_ar: 'فطيرة جبنة مشكل', price: 45, desc: 'جبنة رومي، موتزاريلا، شيدر', category: 'فطائر', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400' },
      { id: 'm19', name_ar: 'فطيرة حلو', price: 40, desc: 'عسل، قشطة، مكسرات', category: 'حلويات', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64571?q=80&w=400' },
    ]
  },
  {
    id: '6',
    name_ar: 'عصائر الشام',
    category: 'عصائر',
    rating: 4.4,
    time: '10-15',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=800',
    menu: [
      { id: 'm20', name_ar: 'عصير فراولة', price: 25, desc: 'فراولة طازجة مع لبن', category: 'عصائر', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400' },
      { id: 'm21', name_ar: 'عصير مانجو', price: 30, desc: 'مانجو طازج', category: 'عصائر', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=400' },
      { id: 'm22', name_ar: 'سموذي موز بالشوكولاتة', price: 35, desc: 'موز، شوكولاتة، لبن، آيس كريم', category: 'سموذي', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400' },
      { id: 'm23', name_ar: 'كوكتيل فواكه', price: 40, desc: 'مانجو، فراولة، موز، عسل', category: 'كوكتيل', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=400' },
    ]
  },
  {
    id: '7',
    name_ar: 'حلواني النجمة',
    category: 'حلويات',
    rating: 4.3,
    time: '15-20',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
    menu: [
      { id: 'm24', name_ar: 'كنافة نابلسية', price: 50, desc: 'كنافة بالجبنة والقطر', category: 'حلويات شرقية', image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=400' },
      { id: 'm25', name_ar: 'بسبوسة', price: 25, desc: 'بسبوسة بالقشطة', category: 'حلويات شرقية', image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=400' },
      { id: 'm26', name_ar: 'تشيز كيك', price: 60, desc: 'تشيز كيك بصوص الفراولة', category: 'حلويات غربية', image: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=400' },
    ]
  },
  {
    id: '8',
    name_ar: 'كبدة ومخ الريس',
    category: 'كبدة',
    rating: 4.7,
    time: '10-20',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
    menu: [
      { id: 'm27', name_ar: 'ساندوتش كبدة اسكندراني', price: 35, desc: 'كبدة بالفلفل الحار والطماطم', category: 'ساندوتشات', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400' },
      { id: 'm28', name_ar: 'ساندوتش مخ', price: 40, desc: 'مخ بالزبدة والبهارات', category: 'ساندوتشات', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400' },
      { id: 'm29', name_ar: 'وجبة كبدة كبيرة', price: 55, desc: 'ساندوتش كبدة + بطاطس + مشروب', category: 'وجبات', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400' },
    ]
  },
];

export const CATEGORIES = ['الكل', 'كشري', 'سوري', 'بيتزا', 'مشويات', 'فطاطري', 'عصائر', 'حلويات', 'كبدة'];
