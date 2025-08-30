# دليل تنظيم كود الترجمة - Translation Code Organization Guide

## 📋 نظرة عامة - Overview

تم تنظيم كود الترجمة في جميع ملفات JavaScript بحيث يكون واضح ومنظم لتسهيل التعديل اليدوي لاحقاً.

## 🗂️ هيكل التنظيم - Organization Structure

### 1. ملف `about.js` - About Page
```
translations = {
    // ===== ARABIC TRANSLATIONS =====
    ar: {
        // Navigation & Header
        'Home': 'الرئيسية',
        'About Us': 'معلومات عنا',
        // ... المزيد
        
        // Page Titles & Headers
        'Company Overview': 'نظرة عامة على الشركة',
        // ... المزيد
        
        // Company Description
        'Leading group of companies...': 'مجموعة شركات رائدة...',
        // ... المزيد
        
        // Success Messages
        'Our success is achieved...': 'نجاحنا يتحقق...',
        // ... المزيد
        
        // Footer
        'Quick Links': 'روابط سريعة',
        // ... المزيد
        
        // Page Meta
        'About Us | Taazur...': 'معلومات عنا | تآزر...',
        // ... المزيد
        
        // Image Alt Texts
        'Taazur Business Presentation': 'عرض أعمال تآزر',
        // ... المزيد
        
        // Social Media & Accessibility
        'Facebook': 'فيسبوك',
        // ... المزيد
    },
    
    // ===== ENGLISH TRANSLATIONS =====
    en: {
        // Navigation & Header
        'الرئيسية': 'Home',
        'معلومات عنا': 'About Us',
        // ... المزيد
        
        // Page Titles & Headers
        'نظرة عامة على الشركة': 'Company Overview',
        // ... المزيد
        
        // Company Description
        'مجموعة شركات رائدة...': 'Leading group of companies...',
        // ... المزيد
        
        // Success Messages
        'نجاحنا يتحقق...': 'Our success is achieved...',
        // ... المزيد
        
        // Footer
        'روابط سريعة': 'Quick Links',
        // ... المزيد
        
        // Page Meta
        'معلومات عنا | تآزر...': 'About Us | Taazur...',
        // ... المزيد
        
        // Image Alt Texts
        'عرض أعمال تآزر': 'Taazur Business Presentation',
        // ... المزيد
        
        // Social Media & Accessibility
        'فيسبوك': 'Facebook',
        // ... المزيد
    }
}
```

### 2. ملف `specialty.js` - Specialty Page
```
translations = {
    // ===== ARABIC TRANSLATIONS =====
    ar: {
        // Navigation & Header
        'Home': 'الرئيسية',
        'Our Specialty': 'تخصصنا',
        // ... المزيد
        
        // Company Description
        'We are a specialized company...': 'نحن شركة متخصصة...',
        // ... المزيد
        
        // Values & Principles
        'Environmental responsibility': 'المسؤولية البيئية',
        // ... المزيد
        
        // Journey & Success
        'Our journey began...': 'بدأت رحلتنا...',
        // ... المزيد
        
        // Footer
        '© 2025 Taazur...': '© 2025 تآزر...',
        // ... المزيد
    },
    
    // ===== ENGLISH TRANSLATIONS =====
    en: {
        // Navigation & Header
        'الرئيسية': 'Home',
        'تخصصنا': 'Our Specialty',
        // ... المزيد
        
        // Company Description
        'نحن شركة متخصصة...': 'We are a specialized company...',
        // ... المزيد
        
        // Values & Principles
        'المسؤولية البيئية': 'Environmental responsibility',
        // ... المزيد
        
        // Journey & Success
        'بدأت رحلتنا...': 'Our journey began...',
        // ... المزيد
        
        // Footer
        '© 2025 تآزر...': '© 2025 Taazur...',
        // ... المزيد
    }
}
```

### 3. ملف `careers.js` - Careers Page
```
translations = {
    // ===== ARABIC TRANSLATIONS =====
    ar: {
        // Navigation & Header
        'Home': 'الرئيسية',
        'Careers': 'التوظيف',
        // ... المزيد
        
        // Page Titles & Headers
        'Job Opportunities': 'فرص عمل متاحة',
        // ... المزيد
        
        // Company Description
        'Join Taazur team...': 'انضم إلى فريق تآزر...',
        // ... المزيد
        
        // Benefits & Advantages
        'Motivating and Professional...': 'بيئة عمل محفزة...',
        // ... المزيد
        
        // Contact Form
        'Full Name': 'الاسم الكامل',
        // ... المزيد
        
        // Footer
        '© 2025 Taazur...': '© 2025 تآزر...',
        // ... المزيد
    },
    
    // ===== ENGLISH TRANSLATIONS =====
    en: {
        // Navigation & Header
        'الرئيسية': 'Home',
        'التوظيف': 'Careers',
        // ... المزيد
        
        // Page Titles & Headers
        'فرص عمل متاحة': 'Job Opportunities',
        // ... المزيد
        
        // Company Description
        'انضم إلى فريق تآزر...': 'Join Taazur team...',
        // ... المزيد
        
        // Benefits & Advantages
        'بيئة عمل محفزة...': 'Motivating and Professional...',
        // ... المزيد
        
        // Contact Form
        'الاسم الكامل': 'Full Name',
        // ... المزيد
        
        // Footer
        '© 2025 تآزر...': '© 2025 Taazur...',
        // ... المزيد
    }
}
```

## 🔧 كيفية التعديل - How to Edit

### إضافة ترجمة جديدة - Adding New Translation

1. **حدد الملف المناسب** حسب الصفحة
2. **أضف الترجمة في القسم المناسب**:
   ```javascript
   // في قسم ARABIC TRANSLATIONS
   'English Text': 'النص العربي',
   
   // في قسم ENGLISH TRANSLATIONS
   'النص العربي': 'English Text',
   ```

### مثال عملي - Practical Example

إذا أردت إضافة ترجمة لـ "Welcome Message":

```javascript
// في ملف about.js
translations = {
    ar: {
        // Navigation & Header
        'Home': 'الرئيسية',
        // ... المزيد
        
        // Company Description
        'Welcome Message': 'رسالة الترحيب', // إضافة جديدة
        // ... المزيد
    },
    en: {
        // Navigation & Header
        'الرئيسية': 'Home',
        // ... المزيد
        
        // Company Description
        'رسالة الترحيب': 'Welcome Message', // إضافة جديدة
        // ... المزيد
    }
}
```

## 📝 فئات الترجمة - Translation Categories

### 1. Navigation & Header
- عناصر القائمة الرئيسية
- أزرار التنقل
- العناوين الرئيسية

### 2. Page Titles & Headers
- عناوين الصفحات
- العناوين الفرعية
- عناوين الأقسام

### 3. Company Description
- وصف الشركة
- المعلومات الأساسية
- النصوص الطويلة

### 4. Success Messages
- رسائل النجاح
- الشعارات
- العبارات التحفيزية

### 5. Footer
- روابط التذييل
- حقوق النشر
- سياسات الخصوصية

### 6. Page Meta
- عناوين الصفحات
- أوصاف الصفحات
- البيانات الوصفية

### 7. Image Alt Texts
- نصوص بديلة للصور
- أوصاف الصور

### 8. Social Media & Accessibility
- وسائل التواصل الاجتماعي
- نصوص إمكانية الوصول
- أزرار التحكم

### 9. Contact Form
- حقول النماذج
- أزرار الإرسال
- رسائل التحقق

### 10. Benefits & Advantages
- المزايا والفوائد
- نقاط القوة
- الخصائص المميزة

## ⚠️ ملاحظات مهمة - Important Notes

1. **احتفظ بالتنظيم**: تأكد من وضع الترجمة في القسم المناسب
2. **التناسق**: تأكد من وجود الترجمة في كلا القسمين (ar و en)
3. **الاقتباسات**: استخدم اقتباسات مفردة أو مزدوجة بشكل متسق
4. **الفاصلة**: تأكد من وجود فاصلة بعد كل ترجمة (إلا الأخيرة)
5. **الاختبار**: اختبر الترجمة بعد الإضافة

## 🚀 تشغيل الخادم - Running Server

لتشغيل الموقع واختبار الترجمة:

```bash
# في PowerShell
cd taazur
python -m http.server 8000
```

ثم افتح المتصفح على: `http://localhost:8000`

## 📞 الدعم - Support

إذا واجهت أي مشاكل في الترجمة أو تحتاج مساعدة إضافية، يمكنك:
1. مراجعة هذا الدليل
2. فحص أمثلة الترجمة الموجودة
3. التأكد من صحة بناء الجملة في JavaScript
