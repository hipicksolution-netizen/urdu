import React from 'react';
import { 
  Printer, BookOpen, PenTool, Image as ImageIcon, Star, 
  Music, Car, Bird, Book, CircleDashed, Key, Hand, Box,
  Leaf, Flower, ArrowLeftRight, Check, X, ShieldQuestion,
  Search, Smile, CloudRain
} from 'lucide-react';

const Page = ({ children, pageNum, headerText }: { children: React.ReactNode, pageNum: number, headerText?: string }) => (
  <div className="bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.05)] w-full max-w-[210mm] min-h-[297mm] mx-auto p-10 sm:p-14 mb-12 print:shadow-none print:w-[210mm] print:h-[297mm] print:m-0 print:p-8 break-after-page flex flex-col relative print-exact border border-gray-100 print:border-none">
    {headerText && (
      <header className="border-b-4 border-indigo-900 pb-4 mb-8 flex items-center justify-between">
        <div>
           {pageNum === 1 && <h1 className="text-3xl text-indigo-900 mb-1" style={{ lineHeight: '1.6' }}>موسم گرما کا کام</h1>}
           <h2 className="text-xl text-gray-700">عنوان: <span className="font-bold relative bottom-1">{headerText}</span></h2>
        </div>
        <div className="bg-indigo-100 text-indigo-800 p-3 rounded-full print:border print:border-indigo-800 print:bg-white">
          <BookOpen strokeWidth={1.5} size={36} />
        </div>
      </header>
    )}
    <div className="flex-1 flex flex-col">
      {children}
    </div>
    <div className="mt-auto pt-6 text-center text-gray-400 text-sm">صفحہ نمبر {pageNum}</div>
  </div>
);

const SectionHeader = ({ num, text }: { num: string | number, text: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="bg-indigo-800 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 print:bg-indigo-800 print:text-white print-exact">{num}</span>
    <h3 className="text-2xl font-bold text-gray-800" style={{ lineHeight: '1.8' }}>{text}</h3>
  </div>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 font-urdu py-8 px-4 sm:px-8 selection:bg-blue-200">
      
      {/* Floating Action Button */}
      <div className="fixed top-6 left-6 z-50 no-print flex gap-4">
        <button
          onClick={handlePrint}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-medium px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 transition-transform hover:-translate-y-1"
        >
          <Printer size={22} />
          <span className="text-sm font-bold tracking-wide">Print Complete Pack</span>
        </button>
      </div>

      {/* --- PAGE 1: Intro & Meanings --- */}
      <Page pageNum={1} headerText="میرا گھر، میرا خاندان">
        <div className="text-center mb-8 pb-4 border-b-2 border-indigo-100">
           <h1 className="text-4xl font-black text-indigo-900 font-sans tracking-wide">STARS INTERNATIONAL SCHOOL</h1>
           <p className="text-xl text-indigo-600 mt-2 font-bold">Summer Vacation Homework</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 print:bg-transparent print:p-0 print:gap-4 print:border-none">
          <div className="flex gap-4 items-end">
            <label className="text-2xl font-bold whitespace-nowrap text-gray-800">طالب علم کا نام:</label>
            <input type="text" className="flex-1 border-b-2 border-gray-400 bg-transparent outline-none text-2xl pb-1" />
          </div>
          <div className="flex gap-4 items-end">
            <label className="text-2xl font-bold whitespace-nowrap text-gray-800">جماعت اور سیکشن:</label>
            <input type="text" className="flex-1 border-b-2 border-gray-400 bg-transparent outline-none text-2xl pb-1" />
          </div>
        </div>

        <SectionHeader num="۱" text="دیے ہوئے الفاظ کے معنی لکھیں اور جملوں میں استعمال کریں۔" />
        
        <div className="space-y-6">
          {[
            { word: 'ادھر اُدھر', hint: '(دونوں طرف)' },
            { word: 'سودا سلف', hint: '(بازاری چیز)' },
            { word: 'نوٹ', hint: '(کاغذی رقم)' },
            { word: 'فوراً', hint: '(جلدی سے)' },
          ].map((item, idx) => (
            <div key={idx} className="border-2 border-indigo-100 rounded-xl p-4 flex flex-col gap-4 bg-white shadow-sm print:border-gray-300">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-2">
                <span className="text-2xl font-bold text-indigo-900 w-32">{item.word}</span>
                <span className="text-gray-400 font-sans mx-2 text-sm">{item.hint}</span>
                <span className="text-xl text-gray-500 font-bold">معنی:</span>
                <input type="text" className="flex-1 border-b border-dashed border-gray-400 outline-none text-xl p-1 bg-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl text-gray-500 font-bold w-16">جملہ:</span>
                <input type="text" className="flex-1 border-b border-gray-400 outline-none text-xl p-1 bg-transparent" />
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* --- PAGE 2: MCQs & Blanks --- */}
      <Page pageNum={2} headerText="میرا گھر - مشق">
        <SectionHeader num="۲" text="سبق کے مطابق درست جواب کی نشان دہی کریں۔" />
        <div className="space-y-8 bg-orange-50/30 p-8 rounded-xl border border-orange-100 mb-12 print:border-gray-300 print:bg-transparent">
          <div>
            <p className="text-2xl mb-4 leading-loose">عمر کھیل کر گھر واپس آ رہا تھا:</p>
            <div className="flex gap-12 text-xl mr-4">
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g1" className="w-5 h-5 accent-indigo-600 print-exact" /> فٹ بال</label>
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g1" className="w-5 h-5 accent-indigo-600 print-exact" /> کرکٹ</label>
            </div>
          </div>
          <div>
            <p className="text-2xl mb-4 leading-loose">عمر کو نوٹ ملا:</p>
            <div className="flex gap-12 text-xl mr-4">
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g2" className="w-5 h-5 accent-indigo-600 print-exact" /> پانچ سو کا</label>
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g2" className="w-5 h-5 accent-indigo-600 print-exact" /> چار سو کا</label>
            </div>
          </div>
          <div>
            <p className="text-2xl mb-4 leading-loose">گھر واپس آ کر عمر نے سارا واقعہ سنایا:</p>
            <div className="flex gap-12 text-xl mr-4">
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g3" className="w-5 h-5 accent-indigo-600 print-exact" /> امی جان کو</label>
              <label className="flex items-center gap-3 cursor-pointer"><input type="radio" name="g3" className="w-5 h-5 accent-indigo-600 print-exact" /> ابو جان کو</label>
            </div>
          </div>
        </div>

        <SectionHeader num="۳" text="سبق کے مطابق خالی جگہ میں درست الفاظ لکھ کر جملے مکمل کریں۔" />
        <div className="space-y-6 text-2xl leading-loose bg-blue-50/30 p-8 rounded-xl border border-blue-100 print:border-gray-300 print:bg-transparent">
          <div className="flex flex-wrap items-center gap-3">
             عمر نے پیسے <input type="text" className="w-40 border-b-2 border-gray-600 outline-none text-center bg-transparent focus:bg-white text-indigo-700 mx-2" /> ڈال لیے۔
             <span className="text-lg text-gray-500 border border-gray-300 rounded-lg px-3 py-1 font-sans">(بستے میں / جیب میں)</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
             عمر کو سامنے سے ایک <input type="text" className="w-40 border-b-2 border-gray-600 outline-none text-center bg-transparent focus:bg-white text-indigo-700 mx-2" /> آتی دکھائی دی۔
             <span className="text-lg text-gray-500 border border-gray-300 rounded-lg px-3 py-1 font-sans">(عورت / لڑکی)</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
             عورت نے عمر کو ڈھیروں <input type="text" className="w-40 border-b-2 border-gray-600 outline-none text-center bg-transparent focus:bg-white text-indigo-700 mx-2" /> دیں۔
             <span className="text-lg text-gray-500 border border-gray-300 rounded-lg px-3 py-1 font-sans">(دعائیں / ٹافیاں)</span>
          </div>
        </div>
      </Page>

      {/* --- PAGE 3: Questions --- */}
      <Page pageNum={3} headerText="میرا گھر - سوالات">
        <SectionHeader num="۴" text="دیے ہوئے سوالوں کے جواب دیں:" />
        <div className="space-y-10 mt-4">
          <div className="bg-green-50/40 p-8 rounded-2xl border border-green-200 print:bg-transparent print:border-gray-300 print:p-6">
            <p className="text-2xl font-bold mb-6 text-green-900 flex gap-4">
              <span className="text-green-700">الف)</span> نوٹ دیکھ کر عمر نے کیا سوچا؟
            </p>
            <div className="space-y-8 mt-4">
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
            </div>
          </div>
          
          <div className="bg-blue-50/40 p-8 rounded-2xl border border-blue-200 print:bg-transparent print:border-gray-300 print:p-6">
             <p className="text-2xl font-bold mb-6 text-blue-900 flex gap-4">
              <span className="text-blue-700">ب)</span> عورت نے عمر سے کیا پوچھا؟
            </p>
            <div className="space-y-8 mt-4">
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
            </div>
          </div>
          
          <div className="bg-purple-50/40 p-8 rounded-2xl border border-purple-200 print:bg-transparent print:border-gray-300 print:p-6">
             <p className="text-2xl font-bold mb-6 text-purple-900 flex gap-4">
              <span className="text-purple-700">ج)</span> اگر آپ عمر کی جگہ ہوتے تو کیا کرتے اور کیوں؟
            </p>
             <div className="space-y-8 mt-4">
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
              <div className="border-b-2 border-gray-400 w-full"></div>
            </div>
          </div>
        </div>
      </Page>

      {/* --- PAGE 4: Naming & Sentence Making --- */}
      <Page pageNum={4} headerText="تصویر کے بارے میں لکھیں اور جملے بنائیں">
        <SectionHeader num="۵" text="یہاں دی گئی تصویروں کو غور سے دیکھیں اور ان کے نام لکھیں:" />
        <div className="bg-indigo-50/40 p-8 rounded-2xl border border-indigo-100 flex flex-col items-center gap-8 mb-12 print:border-gray-300 md:flex-row">
            <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
               <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-2"><ImageIcon className="text-gray-400"/><input type="text" className="w-full bg-transparent outline-none text-2xl" placeholder="۱."/></div>
               <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-2"><ImageIcon className="text-gray-400"/><input type="text" className="w-full bg-transparent outline-none text-2xl" placeholder="۲."/></div>
               <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-2"><ImageIcon className="text-gray-400"/><input type="text" className="w-full bg-transparent outline-none text-2xl" placeholder="۳."/></div>
               <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-2"><ImageIcon className="text-gray-400"/><input type="text" className="w-full bg-transparent outline-none text-2xl" placeholder="۴."/></div>
               <div className="flex items-center gap-4 border-b-2 border-gray-400 pb-2 col-span-2"><ImageIcon className="text-gray-400"/><input type="text" className="w-full bg-transparent outline-none text-2xl" placeholder="۵."/></div>
            </div>
            <div className="flex-1 w-full bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-8 min-h-[200px] text-gray-400">
               <span className="text-xl">تصویر یہاں چسپاں کریں یا بنائیں</span>
            </div>
        </div>

        <SectionHeader num="۶" text="دیے ہوئے لفظوں کی مدد سے جملے بنائیں۔" />
        <div className="space-y-6 bg-white p-2">
           {['آم', 'طوطا', 'ٹوپی', 'تالے', 'روٹی'].map((word, i) => (
             <div key={i} className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="bg-indigo-600 text-white text-2xl font-bold py-2 px-6 rounded-lg w-32 text-center print:bg-indigo-600 print:text-white print-exact">{word}</div>
                <div className="border-b-2 border-gray-400 flex-1 h-10 w-full mt-2 sm:mt-0"></div>
             </div>
           ))}
        </div>
      </Page>

      {/* --- PAGE 5: Word Game --- */}
      <Page pageNum={5} headerText="لفظوں کا کھیل">
        <SectionHeader num="۷" text="دیے ہوئے الفاظ کے حروف الگ کریں اور ہر لفظ کے آخری حرف سے کسی چیز یا جگہ کا نام لکھیں۔" />
        
        <div className="mt-8 border-2 border-indigo-200 rounded-2xl overflow-hidden print:border-gray-500 text-center">
           <div className="grid grid-cols-12 gap-0 bg-indigo-100 text-2xl font-bold border-b-2 border-indigo-200 print:bg-gray-200 print:border-gray-500">
              <div className="col-span-3 p-4 border-l-2 border-indigo-200 print:border-gray-500">الفاظ</div>
              <div className="col-span-5 p-4 border-l-2 border-indigo-200 print:border-gray-500">حروف الگ کریں</div>
              <div className="col-span-4 p-4">نئی چیز یا جگہ کا نام</div>
           </div>

           {[
             { w: 'کتاب', boxes: 4 },
             { w: 'دیس', boxes: 3 },
             { w: 'مور', boxes: 3 },
             { w: 'نام', boxes: 3 },
             { w: 'کھلونا', boxes: 6 },
           ].map((item, idx) => (
             <div key={idx} className="grid grid-cols-12 gap-0 border-b border-indigo-100 last:border-0 print:border-gray-400 items-stretch bg-white">
                <div className="col-span-3 p-4 border-l-2 border-indigo-100 print:border-gray-400 flex items-center justify-center text-3xl font-bold text-indigo-900">
                  {item.w}
                </div>
                <div className="col-span-5 p-4 border-l-2 border-indigo-100 print:border-gray-400 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                  {Array.from({length: item.boxes}).map((_, i) => (
                    <input key={i} type="text" maxLength={1} className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded text-center text-2xl outline-none focus:border-indigo-500 print:border-gray-500" />
                  ))}
                </div>
                <div className="col-span-4 p-4 flex items-center justify-center">
                  <input type="text" className="w-[80%] border-b-2 border-dashed border-gray-400 text-center text-2xl outline-none py-2 focus:border-indigo-600 bg-transparent" placeholder="..." />
                </div>
             </div>
           ))}
        </div>
      </Page>

      {/* --- PAGE 6: Yeh and Woh --- */}
      <Page pageNum={6} headerText="پڑھنا سیکھیں - اشارے">
        <SectionHeader num="۸" text="تصاویر دیکھ کر خالی جگہ میں 'یہ' یا 'وہ' اور تصویر کا نام لکھیں۔" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
           {[
             { Icon: Music, isNear: true },
             { Icon: Car, isNear: false },
             { Icon: Bird, isNear: true },
             { Icon: BookOpen, isNear: false },
             { Icon: Box, isNear: true },
             { Icon: Star, isNear: false },
           ].map((item, idx) => (
             <div key={idx} className="flex gap-6 items-center bg-gray-50 border border-gray-200 p-4 rounded-2xl print:bg-transparent print:border-gray-300">
                <div className="bg-white border-2 border-indigo-100 w-24 h-24 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm print:border-gray-400">
                  <item.Icon size={48} strokeWidth={1.5} className="opacity-80" />
                </div>
                <div className="flex-1 text-2xl flex items-center gap-3">
                  <input type="text" className="w-16 border-b-2 border-indigo-400 outline-none text-center bg-transparent focus:border-indigo-700 pb-1" placeholder="یہ / وہ" />
                  <input type="text" className="flex-1 min-w-[80px] border-b-2 border-gray-400 outline-none text-center bg-transparent focus:border-indigo-700 pb-1" placeholder="نام" />
                  <span className="font-bold">ہے۔</span>
                </div>
             </div>
           ))}
        </div>
      </Page>

      {/* --- PAGE 7: Modify First Letter & Naming --- */}
      <Page pageNum={7} headerText="الفاظ سازی اور تصویروں کے نام">
        <SectionHeader num="۹" text="دی گئی تصویروں کے درست نام لکھیں۔" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 text-center">
           {[
             { Icon: Key },
             { Icon: Box },
             { Icon: Hand },
             { Icon: CircleDashed },
           ].map((item, idx) => (
             <div key={idx} className="border-2 border-dashed border-gray-300 bg-orange-50/20 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 print:border-solid">
                <item.Icon size={56} className="text-gray-400 shrink-0" strokeWidth={1} />
                <input type="text" className="w-full border-b-2 border-gray-400 text-center text-2xl outline-none bg-transparent pb-1" placeholder="نام..." />
             </div>
           ))}
        </div>

        <SectionHeader num="۱۰" text="لفظ کا پہلا حرف بدل کر نیا لفظ بنائیں۔ گائیں اور لکھیں۔" />
        <div className="space-y-6 bg-blue-50/30 p-8 rounded-2xl border border-blue-100 font-bold text-2xl print:bg-transparent print:border-gray-300">
          <div className="flex items-center gap-8 border-b-2 border-dashed border-gray-200 pb-4">
             <div className="w-32 text-center text-blue-900 border-2 border-blue-200 bg-white rounded-full py-2">تارا</div>
             <span className="text-gray-400">سے</span>
             <input type="text" className="flex-1 bg-transparent border-b-2 border-gray-500 outline-none text-center" placeholder="(جیسے سارا)" />
          </div>
          <div className="flex items-center gap-8 border-b-2 border-dashed border-gray-200 pb-4">
             <div className="w-32 text-center text-blue-900 border-2 border-blue-200 bg-white rounded-full py-2">جوڑو</div>
             <span className="text-gray-400">سے</span>
             <input type="text" className="flex-1 bg-transparent border-b-2 border-gray-500 outline-none text-center" />
          </div>
          <div className="flex items-center gap-8 border-b-2 border-dashed border-gray-200 pb-4">
             <div className="w-32 text-center text-blue-900 border-2 border-blue-200 bg-white rounded-full py-2">گول</div>
             <span className="text-gray-400">سے</span>
             <input type="text" className="flex-1 bg-transparent border-b-2 border-gray-500 outline-none text-center" />
          </div>
          <div className="flex items-center gap-8 pb-2">
             <div className="w-32 text-center text-blue-900 border-2 border-blue-200 bg-white rounded-full py-2">تالی</div>
             <span className="text-gray-400">سے</span>
             <input type="text" className="flex-1 bg-transparent border-b-2 border-gray-500 outline-none text-center" />
          </div>
        </div>
      </Page>

      {/* --- PAGE 8: Letter isolation --- */}
      <Page pageNum={8} headerText="حروف الگ کریں">
        <SectionHeader num="۱۱" text="مثال کے مطابق تصاویر دیکھیں اور حروف الگ الگ کریں یا ملائیں۔" />
        <div className="mt-8 space-y-6">
           {[
             { w: 'طوطے', len: 4 },
             { w: 'تارے', len: 4 },
             { w: 'باجے', len: 4 },
             { w: 'جوتے', len: 4 },
             { w: 'لڑکا', len: 4 },
           ].map((item, idx) => (
             <div key={idx} className="flex gap-4 sm:gap-8 items-center bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 print:bg-transparent print:border-gray-400 justify-between">
                <div className="text-3xl font-bold text-indigo-900 w-24 sm:w-32 border-l-2 border-indigo-200 pl-4">{item.w}</div>
                <div className="flex gap-2 sm:gap-4 flex-wrap flex-row-reverse justify-end flex-1">
                   {Array.from({length: item.len}).map((_, i) => (
                      <div key={i} className="flex items-center justify-center bg-white border-2 border-indigo-300 shadow-sm rounded-lg w-12 h-12 sm:w-16 sm:h-16 print:border-gray-500">
                        <input type="text" maxLength={1} className="w-full text-center text-2xl font-bold text-gray-800 bg-transparent outline-none p-0 focus:bg-indigo-50 rounded" />
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </Page>

      {/* --- PAGE 9: Grammar (Singular/Plural & Masculine/Feminine) --- */}
      <Page pageNum={9} headerText="قواعد - واحد اور جمع">
        <SectionHeader num="۱۲" text="دیے گئے واحد الفاظ کے جمع لکھیں۔" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-green-50/20 p-8 rounded-2xl border border-green-200 print:bg-transparent print:border-gray-300">
           {[
             'لڑکا', 'طوطا', 'بستہ', 'تارا', 'جوتا', 'دروازہ'
           ].map((word, idx) => (
             <div key={idx} className="flex items-center gap-4 border-b-2 border-dashed border-gray-300 pb-2">
               <div className="bg-green-100 text-green-900 text-2xl font-bold py-2 w-28 text-center rounded-lg shadow-sm print:border print:border-gray-400 print:bg-white">{word}</div>
               <span className="text-gray-400 text-xl font-bold px-2">←</span>
               <input type="text" className="flex-1 bg-transparent outline-none text-2xl focus:border-green-600 px-2 text-center border-b border-transparent focus:border-dashed" placeholder="..." />
             </div>
           ))}
        </div>

        <div className="mt-12">
           <SectionHeader num="۱۳" text="دیے گئے مذکر الفاظ کے مونث لکھیں۔" />
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-purple-50/20 p-8 rounded-2xl border border-purple-200 mt-6 print:bg-transparent print:border-gray-300">
              {[
              'لڑکا', 'نانا', 'دادا', 'چچا', 'مرغا', 'بکرا'
              ].map((word, idx) => (
              <div key={idx} className="flex items-center gap-4 border-b-2 border-dashed border-gray-300 pb-2">
                 <div className="bg-purple-100 text-purple-900 text-2xl font-bold py-2 w-28 text-center rounded-lg shadow-sm print:border print:border-gray-400 print:bg-white">{word}</div>
                 <span className="text-gray-400 text-xl font-bold px-2">←</span>
                 <input type="text" className="flex-1 bg-transparent outline-none text-2xl focus:border-purple-600 px-2 text-center border-b border-transparent focus:border-dashed" placeholder="..." />
              </div>
              ))}
           </div>
        </div>
      </Page>

      {/* --- PAGE 10: Handwriting --- */}
      <Page pageNum={10} headerText="خوش خطی">
        <SectionHeader num="۱۴" text="دی گئی عبارت یا جملوں کو خوش خط لکھیں۔" />
        
        <div className="mt-8 border-2 border-indigo-200 rounded-2xl p-8 bg-white shadow-inner min-h-[400px] flex flex-col gap-10 print:border-gray-400 print:shadow-none">
           <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 print:bg-gray-100 print:border-gray-300">
             <p className="text-3xl leading-[2.5] font-bold text-center text-indigo-900">
               ہمیں ہمیشہ سچ بولنا چاہیے<br/>اور دوسروں کی مدد کرنی چاہیے۔
             </p>
           </div>
           
           <div className="flex-1 space-y-12 pt-6">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="border-b-2 border-gray-400 border-dashed w-full h-12 flex items-end opacity-60">
                   <span className="text-gray-300 font-sans mx-2 -mb-2">{line}</span>
                </div>
              ))}
           </div>
        </div>
      </Page>

      {/* --- PAGE 11: Word making & Image completion --- */}
      <Page pageNum={11} headerText="حروف ملا کر لفظ بنائیں">
        <SectionHeader num="۱۵" text="رنگ بھر کر لفظ بنائیں اور لکھیں۔" />
        <div className="flex flex-col md:flex-row gap-8 justify-around items-center bg-green-50/30 p-8 rounded-2xl border border-green-100 print:bg-transparent print:border-gray-300">
           {/* Leaves shape 1 */}
           <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                 <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-900 shadow print:border print:border-black">ت</div>
                 <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-900 shadow print:border print:border-black">ا</div>
                 <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl font-bold text-green-900 shadow print:border print:border-black">ج</div>
              </div>
              <input type="text" className="border-b-2 border-gray-400 text-center text-3xl outline-none w-32 bg-transparent focus:border-green-500" />
           </div>
           {/* Leaves shape 2 */}
           <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                 <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center text-2xl font-bold text-orange-900 shadow print:border print:border-black">ر</div>
                 <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center text-2xl font-bold text-orange-900 shadow print:border print:border-black">ا</div>
                 <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center text-2xl font-bold text-orange-900 shadow print:border print:border-black">ز</div>
              </div>
              <input type="text" className="border-b-2 border-gray-400 text-center text-3xl outline-none w-32 bg-transparent focus:border-orange-500" />
           </div>
        </div>

        <div className="mt-12">
            <SectionHeader num="۱۶" text="درست حرف لگا کر تصویر کا نام مکمل کریں۔" />
            <div className="grid grid-cols-2 gap-8 mt-6">
            {[
                { img: 'گوبھی', p: 'گو', s: 'بھی' },
                { img: 'گاڑی', p: 'گا', s: 'ڑی' },
                { img: 'ٹافی', p: 'ٹا', s: 'فی' },
                { img: 'روٹی', p: 'رو', s: 'ٹی' },
            ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-center p-4 border-2 border-indigo-50 rounded-xl print:border-gray-200 bg-white">
                    <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-xl border border-gray-200"><ImageIcon className="text-gray-400" size={32}/></div>
                    <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded border-2 border-gray-300"></div>
                        <span className="text-2xl font-bold text-gray-700">{item.p}____</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded border-2 border-gray-300"></div>
                        <span className="text-2xl font-bold text-gray-700">____</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </Page>

      {/* --- PAGE 12: Hai/Hain/Hoon & Change Letter --- */}
      <Page pageNum={12} headerText="قواعد اور لفظوں کا کھیل">
         <SectionHeader num="۱۷" text="دیے ہوئے جملے غور سے پڑھیں کہ 'ہے'، 'ہیں' اور 'ہوں' کہاں استعمال ہوتے ہیں۔" />
         <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 space-y-4 print:bg-transparent print:border-gray-300 print:py-4">
            <p className="text-2xl">زارا پہلی جماعت میں پڑھتی <span className="text-red-500 font-bold">ہے</span>۔</p>
            <p className="text-2xl">پرندے درختوں پر بیٹھے <span className="text-red-500 font-bold">ہیں</span>۔</p>
            <p className="text-2xl">میں آم شوق سے کھاتا <span className="text-red-500 font-bold">ہوں</span>۔</p>
         </div>

         <div className="mt-8">
            <SectionHeader num="۱۸" text="'ہے'، 'ہیں' اور 'ہوں' کا استعمال کرتے ہوئے خالی جگہ پُر کریں۔" />
            <div className="space-y-6 px-4 md:px-12 text-2xl leading-loose">
               <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                 <span className="w-4 h-4 rounded-full bg-indigo-300 print:border print:border-black"></span> میں بانو کا بھائی <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-indigo-500" />
               </div>
               <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                 <span className="w-4 h-4 rounded-full bg-indigo-300 print:border print:border-black"></span> ہم اکٹھے اسکول جاتے <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-indigo-500" />
               </div>
               <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                 <span className="w-4 h-4 rounded-full bg-indigo-300 print:border print:border-black"></span> وہ میری چھوٹی بہن <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-indigo-500" />
               </div>
               <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
                 <span className="w-4 h-4 rounded-full bg-indigo-300 print:border print:border-black"></span> میں بانو کا خیال رکھتا <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-indigo-500" />
               </div>
            </div>
         </div>

         <div className="mt-12">
            <SectionHeader num="۱۹" text="مثال کے مطابق ہر لفظ کا آخری حرف بدل کر نیا لفظ بنائیں۔" />
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-6 px-4">
               {[
                 { w1: 'رات', w2: 'راج' },
                 { w1: 'جال', w2: '' },
                 { w1: 'پیڑ', w2: '' },
                 { w1: 'شان', w2: '' },
                 { w1: 'روک', w2: '' },
                 { w1: 'تین', w2: '' },
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-center border border-indigo-100 bg-white rounded-xl overflow-hidden print:border-gray-400">
                    <div className="bg-indigo-100 text-indigo-900 font-bold p-3 w-28 text-center text-2xl print:bg-gray-100 print:border-r print:border-gray-400">{item.w1}</div>
                    <input type="text" className="flex-1 text-2xl text-center outline-none bg-transparent" placeholder={item.w2 ? item.w2 : 'نیا لفظ'} />
                 </div>
               ))}
            </div>
         </div>
      </Page>

      {/* --- PAGE 13: Reading --- */}
      <Page pageNum={13} headerText="پڑھنا سیکھیں">
         <SectionHeader num="۲۰" text="دی ہوئی عبارت درست تلفظ سے پڑھیں اور سوالوں کے جواب دیں۔" />
         <div className="bg-yellow-50/50 p-8 rounded-2xl border border-yellow-200 text-2xl leading-[2.5] print:bg-transparent print:border-gray-400">
            ثاقب سویرے اٹھتا ہے۔ وہ دادا جان کے ساتھ مسجد جاتا ہے۔ وہ کچھ دیر باغ کی سیر بھی کرتا ہے۔ وہ اپنی جماعت کا سب سے اچھا طالبعلم ہے۔ ثاقب دوسروں کی مدد کرتا ہے۔ ثاقب کو سب پسند کرتے ہیں۔
         </div>

         <div className="mt-12 space-y-10">
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold text-indigo-900 border-r-4 border-indigo-500 pr-4 print:border-gray-800">۱۔ ثاقب کس وقت اٹھتا ہے؟</p>
               <input type="text" className="w-full border-b-2 border-dashed border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-indigo-500" />
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold text-indigo-900 border-r-4 border-indigo-500 pr-4 print:border-gray-800">۲۔ ثاقب دادا جان کے ساتھ کہاں جاتا ہے؟</p>
               <input type="text" className="w-full border-b-2 border-dashed border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-indigo-500" />
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold text-indigo-900 border-r-4 border-indigo-500 pr-4 print:border-gray-800">۳۔ ثاقب دوسروں کے ساتھ کیسے پیش آتا ہے؟</p>
               <input type="text" className="w-full border-b-2 border-dashed border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-indigo-500" />
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold text-indigo-900 border-r-4 border-indigo-500 pr-4 print:border-gray-800">۴۔ ثاقب کو سب کیوں پسند کرتے ہیں؟</p>
               <input type="text" className="w-full border-b-2 border-dashed border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-indigo-500" />
            </div>
         </div>
      </Page>

      {/* --- PAGE 14: Meanings & Blanks --- */}
      <Page pageNum={14} headerText="میرا گھر - الفاظ کے معنی">
         <SectionHeader num="۲۱" text="دیے ہوئے الفاظ کے معنی سمجھیں اور جملوں میں استعمال کریں۔" />
         <div className="space-y-6">
          {[
            { word: 'باورچی خانہ', hint: '(کھانا پکانے کی جگہ)' },
            { word: 'مل جل کر', hint: '(اکٹھے ہو کر)' },
            { word: 'صحن', hint: '(آنگن)' },
            { word: 'جانب', hint: '(طرف)' },
          ].map((item, idx) => (
            <div key={idx} className="border-2 border-blue-50 rounded-xl p-4 flex flex-col gap-4 bg-white print:border-gray-300">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-2 flex-wrap">
                <span className="text-2xl font-bold text-blue-900 w-full sm:w-auto">{item.word}</span>
                <span className="text-gray-400 font-sans mx-2 text-sm">{item.hint}</span>
                <span className="text-xl text-gray-500 font-bold mr-auto">معنی:</span>
                <input type="text" className="flex-1 min-w-[200px] border-b border-dashed border-gray-400 outline-none text-2xl p-1 bg-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl text-gray-500 font-bold w-16">جملہ:</span>
                <input type="text" className="flex-1 border-b border-gray-400 outline-none text-2xl p-1 bg-transparent" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
           <SectionHeader num="۲۲" text="سبق کے مطابق درست اور غلط جواب کی نشان دہی کریں۔" />
           <div className="bg-orange-50/40 p-6 rounded-2xl border border-orange-100 space-y-6 mt-4 print:bg-transparent print:border-gray-300">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b pb-4 border-orange-200 print:border-gray-300">
                 <p className="text-2xl font-bold text-orange-900 text-center sm:text-right w-full">کمروں کے سامنے ہے:</p>
                 <div className="flex gap-4">
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q1" className="mr-2"/> باورچی خانہ</label>
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q1" className="mr-2"/> صحن</label>
                 </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b pb-4 border-orange-200 print:border-gray-300">
                 <p className="text-2xl font-bold text-orange-900 text-center sm:text-right w-full">صحن میں درخت ہیں:</p>
                 <div className="flex gap-4">
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q2" className="mr-2"/> آم اور کینو کے</label>
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q2" className="mr-2"/> آم اور امرود کے</label>
                 </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                 <p className="text-2xl font-bold text-orange-900 text-center sm:text-right w-full">سارہ کے گھر میں کمرے ہیں:</p>
                 <div className="flex gap-4">
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q3" className="mr-2"/> دو</label>
                    <label className="bg-white border-2 border-orange-200 px-6 py-2 rounded-xl text-xl cursor-pointer hover:bg-orange-100 print:border-gray-400"><input type="radio" name="q3" className="mr-2"/> تین</label>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-10">
           <SectionHeader num="۲۳" text="درست الفاظ لکھ کر خالی جگہ پُر کریں۔" />
           <div className="space-y-6 text-2xl leading-loose bg-purple-50/40 p-8 rounded-2xl border border-purple-100 print:bg-transparent print:border-gray-300">
              <div className="flex justify-center flex-wrap gap-4 mb-6 pb-6 border-b border-purple-200 print:border-gray-300">
                 <span className="bg-white px-4 py-1 rounded-lg border shadow-sm font-bold text-purple-900 print:border-gray-400">مل جل</span>
                 <span className="bg-white px-4 py-1 rounded-lg border shadow-sm font-bold text-purple-900 print:border-gray-400">مدد</span>
                 <span className="bg-white px-4 py-1 rounded-lg border shadow-sm font-bold text-purple-900 print:border-gray-400">کیاریاں</span>
              </div>
              <p>صحن کی دیوار کے ساتھ پھولوں کی <input type="text" className="w-32 border-b-2 border-purple-400 outline-none text-center bg-transparent focus:border-purple-600" /> ہیں۔</p>
              <p>گھر میں سب <input type="text" className="w-32 border-b-2 border-purple-400 outline-none text-center bg-transparent focus:border-purple-600" /> کر رہتے ہیں۔</p>
              <p>سارہ گھر کے کاموں میں امی ابو کی <input type="text" className="w-32 border-b-2 border-purple-400 outline-none text-center bg-transparent focus:border-purple-600" /> کرتی ہے۔</p>
           </div>
        </div>
      </Page>

      {/* --- PAGE 15: Q&A and Conversaton --- */}
      <Page pageNum={15} headerText="میرا گھر - سوالات و بات چیت">
         <SectionHeader num="۲۴" text="دیے ہوئے سوالوں کے جواب دیں۔" />
         <div className="space-y-10 mt-6 px-4">
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold flex gap-4 text-gray-800"><span className="text-green-600">الف)</span> سارہ کے بھائی کا کیا نام ہے؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-green-500" />
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold flex gap-4 text-gray-800"><span className="text-green-600">ب)</span> سارہ کے گھر میں کون کون رہتا ہے؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-green-500" />
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-2xl font-bold flex gap-4 text-gray-800"><span className="text-green-600">ج)</span> آپ کن کن کاموں میں اپنے امی ابو کا ہاتھ بٹاتے ہیں؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-green-500" />
            </div>
         </div>

         <div className="mt-16">
            <SectionHeader num="۲۵" text="بات سے نکلے بات: زبانی سوال" />
            <div className="bg-indigo-50/50 p-8 rounded-2xl flex items-center gap-6 border-2 border-dashed border-indigo-200 print:bg-transparent print:border-gray-400 print:border-solid">
               <div className="w-16 h-16 shrink-0 bg-indigo-100 rounded-full flex items-center justify-center print:border print:border-gray-300">
                  <ShieldQuestion size={32} className="text-indigo-600"/>
               </div>
               <p className="text-2xl leading-loose font-bold text-indigo-900">
                  آپس میں بات چیت کریں اور بتائیں کہ آپ کو اپنے گھر کا کون سا حصہ پسند ہے اور کیوں؟
               </p>
            </div>
         </div>
      </Page>

      {/* --- PAGE 16: Masculine/Feminine --- */}
      <Page pageNum={16} headerText="مذکر / مونث">
         <SectionHeader num="۲۶" text="دیے گئے الفاظ کے درست مونث لکھیں یا ملائیں۔" />
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 px-6">
            {[
               { m: 'دادا جان', f: 'دادی جان' },
               { m: 'نانا جان', f: 'نانی جان' },
               { m: 'تایا جان', f: 'تائی جان' },
               { m: 'چچا جان', f: 'چچی جان' },
               { m: 'ماموں جان', f: 'ممانی جان' },
               { m: 'بھائی جان', f: 'بھابھی / بہن' }
            ].map((item, idx) => (
               <div key={idx} className="flex items-center gap-6 p-4 rounded-xl border border-gray-200 bg-gray-50 print:bg-transparent print:border-gray-300">
                  <div className="bg-indigo-600 text-white font-bold py-3 w-32 text-center rounded-lg shadow-sm text-2xl print:bg-indigo-600 print:text-white print-exact">{item.m}</div>
                  <ArrowLeftRight className="text-gray-400"/>
                  <input type="text" className="flex-1 bg-transparent border-b-2 border-gray-400 outline-none text-2xl text-center pb-1 focus:border-indigo-600" placeholder="..." />
               </div>
            ))}
         </div>
         <div className="mt-16 flex justify-center">
            <div className="bg-orange-50 w-full p-8 rounded-2xl border-2 border-dashed border-orange-200 flex flex-col gap-4 items-center justify-center text-orange-800 text-2xl print:text-black print:border-solid print:bg-white print:border-gray-400">
               <Smile size={48} className="text-orange-400"/>
               یہاں اوپر دیے گئے رشتوں کی تصاویر یا خاکہ بنا سکتے ہیں۔
            </div>
         </div>
      </Page>

      {/* --- PAGE 17: Wahid/Jama & Tha/Thi/Thay --- */}
      <Page pageNum={17} headerText="واحد جمع / تھا، تھی، تھے">
         <SectionHeader num="۲۷" text="تصاویر کے مطابق ان کے واحد اور جمع لکھیں۔" />
         <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-8 text-center text-2xl bg-green-50/20 p-6 rounded-2xl border border-green-100 print:bg-transparent print:border-gray-300">
            <div className="font-bold text-green-800 border-b-2 border-green-200 pb-2 print:border-gray-400">واحد</div>
            <div className="font-bold text-green-800 border-b-2 border-green-200 pb-2 print:border-gray-400">جمع</div>

            <div className="flex flex-col items-center gap-4">
               <input type="text" className="w-full max-w-[200px] border border-gray-400 bg-white rounded-lg p-2 text-center outline-none focus:border-green-600 focus:border-2" placeholder="بستہ" />
            </div>
            <div className="flex flex-col items-center gap-4">
               <input type="text" className="w-full max-w-[200px] border border-gray-400 bg-white rounded-lg p-2 text-center outline-none focus:border-green-600 focus:border-2" placeholder="بستے" />
            </div>
            {/* Rows repeated without images */}
            {Array.from({length: 4}).map((_, idx) => (
               <React.Fragment key={idx}>
                  <div className="flex flex-col items-center pt-6 border-t border-dashed border-green-200 print:border-gray-300">
                     <input type="text" className="w-full max-w-[200px] border border-gray-400 bg-white rounded-lg p-2 text-center outline-none focus:border-green-600 focus:border-2" />
                  </div>
                  <div className="flex flex-col items-center pt-6 border-t border-dashed border-green-200 print:border-gray-300">
                     <input type="text" className="w-full max-w-[200px] border border-gray-400 bg-white rounded-lg p-2 text-center outline-none focus:border-green-600 focus:border-2" />
                  </div>
               </React.Fragment>
            ))}
         </div>

         <div className="mt-12">
            <SectionHeader num="۲۸" text="'تھا، تھی، تھے' لکھ کر جملے مکمل کریں۔" />
            <div className="space-y-6 text-2xl leading-loose px-4">
               <p>صبح تیز دھوپ <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-green-600" /> ۔</p>
               <p>بچوں نے سبق یاد کیا <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-green-600" /> ۔</p>
               <p>دادا جان کل لاہور گئے <input type="text" className="w-32 border-b-2 border-gray-500 outline-none text-center bg-transparent focus:border-green-600" /> ۔</p>
            </div>
         </div>
      </Page>

      {/* --- PAGE 18: Poem & Rule Wahid/Jama --- */}
      <Page pageNum={18} headerText="بارش - سوالات اور واحد جمع">
         <SectionHeader num="۲۹" text="دیے ہوئے سوالوں کے جواب دیں۔" />
         <div className="space-y-8 mt-6 px-4">
            <div className="flex flex-col gap-2">
               <p className="text-2xl font-bold flex gap-4 text-blue-900 border-r-4 border-blue-400 pr-4 print:border-gray-800"><span className="text-blue-500">الف)</span> نظم میں کس رنگ کے بادلوں کا ذکر ہے؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
               <p className="text-2xl font-bold flex gap-4 text-blue-900 border-r-4 border-blue-400 pr-4 print:border-gray-800"><span className="text-blue-500">ب)</span> رنگ برنگے پھول کہاں کھلے ہیں؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
               <p className="text-2xl font-bold flex gap-4 text-blue-900 border-r-4 border-blue-400 pr-4 print:border-gray-800"><span className="text-blue-500">ج)</span> آپ کو بارش کے موسم میں کیا کرنا پسند ہے اور کیوں؟</p>
               <input type="text" className="w-full border-b-2 border-gray-400 outline-none text-2xl p-2 bg-transparent focus:border-blue-500" />
            </div>
         </div>

         <div className="mt-12">
            <SectionHeader num="۳۰" text="دیے ہوئے واحد الفاظ غور سے پڑھیں اور ان کی جمع بنائیں۔" />
            <div className="bg-yellow-50/40 p-6 rounded-2xl border border-yellow-200 mb-6 flex gap-4 text-xl items-center print:bg-transparent print:border-gray-400">
               <BookOpen className="shrink-0 text-yellow-600"/>
               <p>یاد رکھیں: لفظ کے آخر میں 'ا' یا 'ہ' ہو تو جمع بناتے وقت اسے 'ے' سے بدل دیتے ہیں۔</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 text-2xl">
               {[
                  { w: 'راستہ', j: 'راستے' },
                  { w: 'دروازہ', j: '' },
                  { w: 'تالا', j: '' },
                  { w: 'طوطا', j: '' },
                  { w: 'بچہ', j: '' },
                  { w: 'بستہ', j: '' },
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                     <div className="flex w-full">
                        <div className="w-1/2 bg-blue-100 text-blue-900 font-bold p-3 text-center border border-blue-200 rounded-r-lg print:bg-gray-100 print:border-gray-400">{item.w}</div>
                        <input type="text" className="w-1/2 bg-white text-center border-y border-l border-gray-300 outline-none rounded-l-lg focus:border-blue-500 focus:border-2 print:border-gray-400" placeholder={item.j}/>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Page>

      {/* --- PAGE 19: Find & Count --- */}
      <Page pageNum={19} headerText="گنو اور بتاؤ - ہندسے اور الفاظ">
         <SectionHeader num="۳۱" text="چیزیں گنیں اور ان کی تعداد ہندسوں اور لفظی گنتی میں لکھیں۔" />
         
         <div className="bg-orange-50/30 p-8 rounded-3xl border-2 border-dashed border-orange-200 mt-6 print:border-gray-400 print:border-solid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
               {[
                  { title: "پھول (Roses)", count: 3, Icon: Flower },
                  { title: "کتابیں (Books)", count: 7, Icon: Book },
                  { title: "پرندے (Birds)", count: 5, Icon: Bird },
                  { title: "گاڑیاں (Cars)", count: 2, Icon: Car },
                  { title: "ستارے (Stars)", count: 4, Icon: Star },
                  { title: "پتے (Leaves)", count: 6, Icon: Leaf }
               ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 print:border-gray-300 print:shadow-none">
                     <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                        <item.Icon size={32}/>
                     </div>
                     <div className="flex flex-col gap-2 flex-1">
                        <span className="text-2xl font-bold text-gray-800">{item.title}</span>
                        <div className="flex gap-4">
                           <input type="text" placeholder="ہندسہ" className="w-16 border-b-2 border-dashed border-orange-300 outline-none text-center text-2xl bg-transparent focus:border-orange-600" />
                           <input type="text" placeholder="لفظی گنتی" className="flex-1 border-b-2 border-dashed border-orange-300 outline-none text-center text-2xl bg-transparent focus:border-orange-600" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Page>

      {/* --- PAGE 20: Essay/Sentences --- */}
      <Page pageNum={20} headerText="کچھ نیا لکھیں">
         <SectionHeader num="۳۲" text="نبی کریم ﷺ کی پیاری عادتوں کے بارے میں چار جملے لکھیں۔" />
         <div className="bg-green-50/30 p-8 rounded-2xl border border-green-100 min-h-[250px] flex flex-col gap-8 mt-6 print:bg-transparent print:border-gray-400">
            {[1, 2, 3, 4].map((num) => (
               <div key={num} className="w-full flex items-end">
                  <span className="text-xl font-bold text-green-800 ml-4 print:text-black">{num}۔</span>
                  <div className="flex-1 border-b-2 border-gray-400 border-dashed h-8"></div>
               </div>
            ))}
         </div>

         <div className="mt-12">
            <SectionHeader num="۳۳" text="تصویر غور سے دیکھیں اور اس میں سے کوئی سے پانچ اسم تلاش کر کے لکھیں۔" />
            <div className="flex bg-indigo-50 border border-indigo-100 p-6 rounded-2xl print:bg-transparent print:border-gray-300 justify-center mb-6">
                <ImageIcon size={64} className="text-indigo-300" />
                <span className="mr-6 text-xl text-indigo-800 flex items-center">(سیر و تفریح کا منظر)</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
               {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="bg-indigo-50 border border-indigo-100 h-16 rounded-xl flex items-center print:bg-transparent print:border-gray-300 px-2 shadow-sm">
                     <span className="text-indigo-800 font-bold ml-2 print:text-black">{num}۔</span>
                     <input type="text" className="w-full bg-transparent outline-none text-xl text-center" />
                  </div>
               ))}
            </div>
         </div>

         <div className="mt-12">
            <SectionHeader num="۳۴" text="اپنے گھر کے بارے میں تین جملے لکھیں۔" />
            <div className="space-y-10 mt-6 px-4">
               <div className="border-b-2 border-gray-400 w-full h-8"></div>
               <div className="border-b-2 border-gray-400 w-full h-8"></div>
               <div className="border-b-2 border-gray-400 w-full h-8"></div>
            </div>
         </div>
      </Page>

    </div>
  );
}

