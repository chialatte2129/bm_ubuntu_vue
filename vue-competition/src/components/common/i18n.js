import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import jaLocale from 'element-ui/lib/locale/lang/ja';
import twLocale from 'element-ui/lib/locale/lang/zh-TW';
export const messages = {
  
    'zh_TW': {
        ...twLocale,
        public:{
            reset_ps:{
                must_fill:"必填",
                password_form:'使用6個或更多字符，混合使用字母和數字，其中需包含1個數字跟1個英文字母',
                min_six:'請使用6個或更多字符',
                charactor:'需包含1個數字跟1個英文字母',
                new_ps:'輸入您的新密碼',
                re_new_ps:'再次輸入您的新密碼',
                reset_ps:'變更密碼',
                error_token:'此連結已失效，請使用最新連結。',
                connect_expired:'此連結已過期，請重新申請。',
                internet_error:'發生錯誤，請聯絡客服人員。',
                reset_success:'密碼重設成功，請使用新密碼登入'
            },
            sign_up:{
                contact_mail : "<p style='color:#F56C6C;display:inline-block'>*</p> 聯絡用 Email : ",
                mail_placeholder : "請輸入 Email",
                mail_pattern : "Email 格式",
                required : "必填",
                both_required : "<p style='color:#F56C6C;display:inline-block;'>*區碼及電話必填</p>",
                name : "<p style='color:#F56C6C;display:inline-block'>*</p> 姓名 : ",
                first_name : "名字",
                last_name : "姓氏",
                first_name_placeholder : "請輸入 名字",
                last_name_placeholder : "請輸入 姓氏",
                identification_or_passport : "<p style='color:#F56C6C;display:inline-block'>*</p> 身份證字號 / 護照號碼 : ",
                id_pass_placeholder : "請輸入身份證字號 / 護照號碼",
                id_pass_description : "若沒有中華民國國籍，請輸入護照號碼。",
                gender : "<p style='color:#F56C6C;display:inline-block'>*</p> 性別 : ",
                male : "男性",
                female : "女性",
                birthdate : "<p style='color:#F56C6C;display:inline-block'>*</p> 出生年月日 : ",
                birthdate_placeholder : "請輸入 生日",
                contact_phone : "<p style='color:#F56C6C;display:inline-block'>*</p> 連絡電話 : ",
                phone_placeholder : "請輸入 聯絡電話",
                phone_codes : "電話區碼",
                phone_codes_placeholder : "請選擇 電話區碼",
                country: "<p style='color:#F56C6C;display:inline-block'>*</p> 國家 : ",
                country_placeholder : "請選擇 國家",
                zip_code : "郵遞區號 : ",
                zip_code_placeholder : "請輸入 郵遞區號",
                address : "聯絡地址 : ",
                address_placeholder : "請輸入 聯絡地址",
                reset_form : "重填表單",
                confirm : "送出表單",
                policy_checkbox : "我已閱讀報名注意事項及隱私權確認。",
                not_match : "限定英文數字",
                thx_registration : "感謝您的報名",
                submit_success_and_leave_page : "秒後將離開本頁...",
                expired_signup : "報名已經截止，感謝您的參與",
                error_message : "如有任何異常請聯絡客服<div style='color:A4A4A4;font-size:18px;'>維亞娛樂客服 : cs@varlivetech.com</div>",
            }
        },
        app:{ 
            title_short: 'VAR BOX 電競平臺', 
            title_mobile :'OPMS 行動版',
            title: 'VAR BOX 電競平臺', 
            full_screen: '全屏',
            not_full_screen: '取消全屏',
            tag_options : '標籤選項',
            tag_close_other:'關閉其他標籤',
            tag_close_all :'關閉所有標籤',
            lang_en_US:'English',
            lang_zh_TW:'中文'
        },
        menus:{
            acl: '權限管理',
            role_edit: '角色管理',         
            user_edit: '帳號管理',
            dict_setting: '字典檔設定',
            dictionary_setting: '字典檔設定',
            competition_info:"比賽資訊",
            competition_league_info:"聯賽資訊",
            competition_league_manage:"聯賽管理",
            competition_advance_info:"晉級賽資訊",
            competition_info_edit:"比賽資訊編輯",
            register_verify:"報名審核",
            competition_check_in:"報到管理",
            competition_group:"分組設定",
            competition_statistics:"比賽統計顯示",
            overview:"總覽",

            league_detail_setting:"聯賽細項設定",
            league_teams_matches:"對陣圖設定",
            league_live_channel:"直播頻道設定",
            league_standing:"排行榜設定",
            league_teams:"聯賽戰隊管理",
            league_players:"聯賽玩家管理"
        },
        table_title:{
            role :'角色代號',
            description :'說明',
            menus :'功能清單',
            account :'帳號',
            email :'電子郵件',
            last_name : '別名',
            actions :'動作權限清單',
            info:"說明",
            action:"動作權限",
        },
        dict:{
            category_quantity: '分類數量 : ',
            setting_quantity: '字典數量 : ',
            category_title: '字典分類',
            key_title: '字典主鍵',
            description_title: '字典說明',
            content_title: '字典內容',
            alert_input_new_keystr: '請輸入[字典主鍵]',
            alert_input_new_category: '請輸入[字典分類]',
            alert_input_new_description: '請輸入[字典說明]',
            alert_input_new_content: '請輸入[字典內容]',
            content_must_json: '字典內容格式必須為 JSON!',
            dict_setting: '字典檔設定',
            dict_list: '字典列表',
            sample:'顯示範例',
            content_example: '<b>字典內容範例 :</b><br>(單一值) : {"label":"動作a", "label_i18n":"dict.action_a", "value":"action_a"},<br>(多重值) : [{"label":"動作a", "label_i18n":"dict.action_a", "value":"action_a"}, {"label":"動作b", "label_i18n":"dict.action_b", "value":"action_b"}]',
            menu_action:{
                create: '建立字典檔',
                delete: '刪除字典檔'
            },
            actions:{
                view_advance_competition:"檢視晉級賽",
                update_advance_competition:"編輯晉級賽",
                delete_advance_competition:"刪除晉級賽",
                view_league_competition:"檢視聯賽",
                update_league_competition:"編輯聯賽",
                delete_league_competition:"刪除聯賽",
            }
        },
        btn:{
            key_word:"關鍵字查詢",
            add : '加入',        
            i18n_lang:'語言',
            confirm: '確定',
            cancel: '取消',
            edit: '編輯',
            delete: '刪除',
            delete_all: '全部刪除',
            search: '搜尋',
            clear: '清空',
            action:'操作',
            new:'新增',
            view:'檢視',
            save:'存檔',
            clean:'清除',
            enter_test : '進入測試介面',
            leave:'離開',
            copy:'複製',
            select_options:'請選擇',
            select_no_limit: '沒有選擇視同與 使用期限 或 活動期限 的最小期限相同',
            select_coupon_no_limit: '沒有選擇視同與 使用期限 或 對應系統設定期限 的最小期限相同',
            select_no_expire: '沒有選擇視同 永久有效',
            input_no_limit: '沒有輸入視同 沒有限制',
            view_detail: '檢視細節',
            sort_setting: '排序設定',
            next:'下一步',
            previous:'上一部',
            check:"檢查",
            apply:"套用",
            apply_manual:"手動套用",
            auto_apply:"自動套用",
            download_excel_file:"下載成excel檔",
            download_excel:"下載 Excel 檔案",
        },
        common_msg:{
            tip:'提示',
            warning:'警示',
            select_date:"選擇日期",
            new : '新增',
            edit_title: '編輯',
            date_title: '日期',
            name_title: '名稱',
            save_ok:'存檔成功',
            delete_ok:'刪除成功',
            copy_ok:'複製成功',
            apply_ok:"套用成功",
            delete_confirm:'刪除後不可回復，是否確定刪除?',
            action_cancel:'取消動作',
            must_fill: '必填',
            isdigit : '請輸入機台ID (數字型別)',
            open: '開',
            close: '關',
            yes: '是',
            no: '否',
            return: '返回',
            max_len: '最大長度 : ',
            min_len: '最小長度 : ',
            input_number: '請輸入數字',
            input_number_lgt_0: '請輸入數字並且大於 0',
            input_string: '請輸入字串',
            update_ok:'成功更新',
            ask_for_copy: '是否確定複製',
            detail_info:"詳細資料",
            content_must_json:"內容格式必須為 JSON",
            time_must_select:"開始與結束時間必須選擇",
            no_shop_deal_logs:"選擇期間內店鋪沒有販賣點數交易紀錄",
            no_reward_logs:"選擇期間內沒有獎勵配發紀錄",
            time_range_too_large:"開始與結束日期不得大於 3 個月",
            post_error_datatype:"參數格式錯誤",
            post_error_param:"參數錯誤",
            ask_for_delete:'刪除不可恢復，是否確定刪除',
            no_data:"沒有資料",
            draft:"草稿中",
            publish:"已發布",
            abandon:"已廢棄",
        },
        account:{
            login: '登入', 
            logout: '登出',
            old_password_not_match:'舊密碼不符合',  
            new_confirm_pass_not_match: '新密碼與確認密碼不一致',        
            new_pass_changed: '密碼已更改，下次請用新密碼登入',
            name_and_pass_not_match :'登入帳號與密碼不符合',
            token_over_exprie:'令牌已過期',
            input_login_name:'請輸入帳號',
            input_login_pass:'請輸入密碼',
            input_account:'請輸入帳號',
            input_alias:'請輸入別名',
            change_password: '修改密碼',
            input_old_pass: '舊密碼',
            input_new_pass: '新密碼',
            input_confirm_pass: '確認新密碼',
            alert_input_new_account:'請輸入[帳號]',
            alert_input_new_alias :'請輸入[別名]',
            alert_input_old_pass:'請輸入[舊密碼]',
            alert_input_new_pass:'請輸入[新密碼]',
            alert_input_confirm_pass:'請輸入[確認新密碼]' ,
            id_is_exist:'帳號已存在，請重新輸入'    ,
            id_is_not_exist:'帳號不存在.',
            id_has_deleted : '帳號已刪除',
        },
        role:{
            alert_id_must_fill:'角色代號必須填寫',
            id_is_exist:'角色代號已存在，請重新輸入',
            id_is_not_exist:'角色代號不存在.',
            id_has_deleted : '角色代號已刪除',
            input_role:"請輸入角色代號",
            input_description:"請輸入角色說明",
        },
        rules:{
            password_len:'密碼長度 6 到 12 字元之間',    
            no_special_characters:'不支援特殊字元',
            only_english_characters:'只支援英文字元',
            only_two_characters:'長度限制2字元',
            only_three_characters:'長度限制3字元',
            only_numbers:'只支援數字字元',
            invalidate_email:'請輸入正確電子郵件形式'

        },
        game_info:{
            filter_name:"請輸入比賽名稱",
            filter_match:"團體 / 個人",
            filter_schedule:"比賽排程狀態",
            filter_game:"遊戲選擇",
            filter_country:"地區選擇",
            filter_city:"城市選擇",
            
            game_id:"比賽代號",
            name:"比賽名稱",
            name_i18n:"比賽名稱 - 多語系",
            country:"比賽地區",
            city:"比賽地點",
            game:"比賽選擇",
            min_players:"最少人數",
            max_players:"最多人數",
            time_setting:"時間設定",
            register_time:"報名時間",
            register_start_time:"報名開始時間",
            register_end_time:"報名截止時間",
            competition_time:"比賽時間",
            game_start_time:"比賽開始時間",
            game_end_time:"比賽結束時間",
            show_timezone:"顯示時區",
            payment_mode:"收費方式",
            fee:"報名費金額",
            currency:"報名費幣別",
            content:"比賽內容或注意事項",
            publish_status:"發布狀態",
            status:"狀態",
            



            league:{
                "match_map":"對陣圖",
                "online_streaming":"直 播 空 間",
            }
        },
    },
    'en_US': {
        ...enLocale,
            public:{
                reset_ps:{
                must_fill:"Required",
                password_form:"Use 6 or more characters with a mix of letters & numbers which include at least one number and one letter.",
                min_six:'Require 6 or more characters',
                charactor:'Require at least one number and one letter.',
                new_ps:"Confirm your new password",
                re_new_ps:"Re-enter your new password",
                reset_ps:"Change Password",
                error_token:"This link is already invalid, please use the latest link.",
                connect_expired:"This link has expired, please apply again.",
                internet_error:"Error had occurred. Please contact customer service center.",
                reset_success:"Your password has been reset successfully. Please log in with your new password."
            },
            sign_up:{
                contact_mail : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Email : ",
                mail_placeholder : "Please enter contact Email",
                mail_pattern : "Email pattern",
                required : "Required",
                both_required : "<p style='color:#F56C6C;display:inline-block;'>*Region codes and contact phone both are Required</p>",
                name : "<p style='color:#F56C6C;display:inline-block'>*</p> Name : ",
                first_name : "First Name",
                last_name : "Last Name",
                first_name_placeholder : "Please enter first name",
                last_name_placeholder : "Please enter last name",
                identification_or_passport : "<p style='color:#F56C6C;display:inline-block'>*</p> Identification / Passport : ",
                id_pass_placeholder : "Please enter identification / passport",
                id_pass_description : "*If you do not have a citizenship in the Republic of China, please enter your passport number.",
                gender : "<p style='color:#F56C6C;display:inline-block'>*</p> Gender : ",
                male : "Male",
                female : "Female",
                birthdate : "<p style='color:#F56C6C;display:inline-block'>*</p> Birthdate : ",
                birthdate_placeholder : "Please enter Birthdate",
                contact_phone : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Phone : ",
                phone_placeholder : "Please enter contact phone",
                phone_codes : "Region Codes",
                phone_codes_placeholder : "Please select region codes",
                country: "<p style='color:#F56C6C;display:inline-block'>*</p> Country : ",
                country_placeholder : "Please select country",
                zip_code : "Zip Code : ",
                zip_code_placeholder : "Please enter zip code",
                address : "Contact Address : ",
                address_placeholder : "Please enter contact address",
                reset_form : "Reset",
                confirm : "Confirm",
                policy_checkbox : "I have read the registration notice and privacy policy confirmation.",
                not_match : "Only English or Number",
                thx_registration : "Thanks your Registration",
                submit_success_and_leave_page : "seconds will close this page...",
                expired_signup : "Registration has expired, thanks for your participation",
                error_message : "Please contact customer service<div style='color:A4A4A4;font-size:18px;'>customer service mail : cs@varlivetech.com</div>",
            }
        },
        app: { 
            title_short: 'eSports', 
            title_mobile :'OPMS Mobile',
            title: 'eSports management system', 
            full_screen: 'full screen',
            not_full_screen: 'close full screen',
            tag_options : 'tag option',
            tag_close_other:'close others',
            tag_close_all :'close all',
            lang_en_US:'English',
            lang_zh_TW:'中文'
        },
        menus:{
            acl: 'Access Control',
            role_edit: 'Role Control',         
            user_edit: 'Account Control',
            dict_setting: 'Dictionary Setting',
            dictionary_setting: 'Dictionary Setting',
            competition_info:"Competition Information",
            competition_league_info:"League Information",
            competition_league_manage:"League Management",
            competition_advance_info:"Advance Information",
            competition_info_edit:"Competition Information Edit",
            register_verify:"Registration Form Verify",
            competition_check_in:"Competition Check In",
            competition_group:"Competition Group",
            competition_statistics:"Competition Statistics",
            overview:"Overview",

            league_detail_setting:"League Detail Setting",
            league_teams_matches:"Matches Setting",
            league_live_channel:"Live Channel Setting",
            league_standing:"Standing Setting",
            league_teams:"League Teams Management",
            league_players:"League Players Management"
        },
        table_title :{
            role :'Role id',
            description :'Description',
            menus :'Menus List',
            account :'Account',
            email :'E-mail',
            last_name : 'Alias',
            actions :'Actions',
            info:"Information",
            action:"Action",
        },
        dict: {
            category_quantity: 'Category Quantity : ',
            setting_quantity: 'Dictionary Quantity : ',
            category_title: 'Category',
            key_title: 'Dictionary Key',
            description_title: 'Description',
            content_title: 'Content',
            alert_input_new_keystr: 'Please fill [Dictionary Key]',
            alert_input_new_category: 'Please fill [Category]',
            alert_input_new_description: 'Please fill [Description]',
            alert_input_new_content: 'Please fill [Content]',
            content_must_json: 'Content format must be JSON!',
            content_example: '<b>Content example :</b><br>(single value):  {"label":"action a","label_i18n":"dict.action_a","value":"action_a"},<br>(multiple value):  [{"label":"action a","label_i18n":"dict.action_a","value":"action_a"},{"label":"action b","label_i18n":"dict.action_b","value":"action_b"}]',
            dict_setting: 'Dictionary Setting',
            dict_list: 'Dictionary List',
            Sample:'sample',
            menu_action: {
            create: 'create dictionary',
            delete: 'delete dictionary'
            },
            actions:{
                view_advance_competition:"View Advance Competition",
                update_advance_competition:"Edit Advance Competition",
                delete_advance_competition:"Delete Advance Competition",
                view_league_competition:"View League Competition",
                update_league_competition:"Edit League Competition",
                delete_league_competition:"Delete League Competition",
            }
        },
        btn: {
            key_word:"Key Words",
            add : 'Add',
            i18n_lang:'Language',
            confirm: 'Confirm',
            cancel: 'Cancel',
            edit: 'Edit',
            delete: 'Delete',
            delete_all: 'Delete All',
            search: 'Search',
            clear: 'Clear',
            action:'Action',
            new:'New',
            view:'View',
            save:'Save',
            save_toSetting:'Save for following Reward Settings',
            clean:'Clean',
            leave:'Leave',
            copy:'Copy',
            enter_test : 'Enter TEST Interface',
            select_options:'Select Options',
            select_no_limit: "Without Options will be Same with tha Min Date between Events' Expired and Use's Expired",
            select_coupon_no_limit: "Without Options will be Same with tha Min Date between System's Expired and Use's Expired",
            select_no_expire: 'Without Options will be Permanent',
            input_no_limit: 'Without Inputs will be No Limit',
            view_detail: 'Details',
            sort_setting: 'Sort Settings',
            next:'Next Step',
            previous:'Previous Step',
            check:"Check",
            apply:"Apply",
            apply_manual:"Manual Apply",
            auto_apply:"Auto Apply",
            download_excel_file:"Download as excel",
            download_excel:"Download as Excel",
        },
        common_msg:{
            tip:'Tip',
            warning:'Warning',
            select_date:"Select Date",
            new : 'Create',
            edit_title: 'Edit',
            date_title: 'Date',
            name_title: 'Name',
            save_ok:'Save OK',
            delete_ok:'Delete OK',
            copy_ok:'Copy OK',
            apply_ok:"Apply OK",
            delete_confirm:'Confirm to delete?',
            action_cancel:'Action Cancel',
            must_fill : 'Required',
            isdigit : 'Please Input Machine ID (digit)',
            open: 'True',
            close: 'False',
            yes: 'True',
            no: 'False',
            return: 'Return',
            max_len: 'Max Length : ',
            min_len: 'Min Length : ',
            input_number: 'Please Input Number',
            input_number_lgt_0: 'Please Input Number and Larger than 0',
            input_string: 'Please Input String',
            update_ok:'Successfully Update',
            ask_for_copy: 'Confirm to copy',
            detail_info:"Detail Information",
            content_must_json: 'Content format must be JSON',
            time_must_select:"Start & End time must be selected",
            no_shop_deal_logs:"There isn't credits deal logs during the period",
            no_reward_logs:"There isn't reward logs during the period",
            time_range_too_large:"The period can't be larger than three months",
            post_error_datatype:"Post parameter data type error",
            post_error_param:"Parameter error",
            ask_for_delete:'Confirm to delete',
            no_data:"No Data",
            draft:"Draft",
            publish:"Published",
            abandon:"Abandoned",
        },
        account: {
            login: 'Login', 
            logout: 'Logout',
            old_password_not_match:'Old password is not match',  
            new_confirm_pass_not_match: 'New password and confirm password must the same',        
            new_pass_changed: 'Password has changed，please use new password at next login',
            name_and_pass_not_match :'Account and password is not match',
            token_over_exprie:'Token is exprie',
            input_login_name:'Please fill account',
            input_login_pass:'Please fill password',
            input_account:'Input Account',
            input_alias:'Input Alias',
            change_password: 'Change Password',
            input_old_pass: 'Old Password',
            input_new_pass: 'New Password',
            input_confirm_pass: 'Confirm Password',
            alert_input_new_account:'Please fill [Account]',
            alert_input_new_alias :'Please fill account[Alias]',
            alert_input_old_pass:'Please fill [Old password]',
            alert_input_new_pass:'Please fill [New password]',
            alert_input_confirm_pass:'Please fill [Confirm password]' ,
            id_is_exist:'The account name already exists, please re-enter'    ,
            id_is_not_exist:'Account does not exist',
            id_has_deleted : 'Account has deleted'
        },
        role :{
            alert_id_must_fill:'Role id must be filled in',
            id_is_exist:'The Role id already exists, please re-enter',
            id_is_not_exist:'Role id does not exist',
            id_has_deleted : 'Role id has deleted',
            input_role:"Input Role id",
            input_description:"Input Role description",
        },
        rules: {
            password_len:'password length must between 6 ~ 12 ',
            no_special_characters:'No Special Characters Allow',
            only_english_characters:'Only Allow English Characters',
            only_two_characters:'Only 2 Characters Allow',
            only_three_characters:'Only 3 Characters Allow',
            only_numbers:'Only Allow Numbers',
            invalidate_email:'Please enter validate email'      
        },
        game_info:{
            filter_name:"Input Competition Name",
            filter_match:"Team / Individual",
            filter_schedule:"Competition Scheduled",
            filter_game:"Games",
            filter_country:"Location",
            filter_city:"City",
            
            game_id:"Game ID",
            name:"Game Name",
            name_i18n:"Game Name in Multi-language",
            country:"Location",
            city:"City",
            game:"Game",
            min_players:"Min Players",
            max_players:"Max Players",
            time_setting:"Time Setting",
            register_time:"Register Time",
            register_start_time:"Register Start Time",
            register_end_time:"Register End Time",
            competition_time:"Competition Time",
            game_start_time:"Game Start Time",
            game_end_time:"Game End Time",
            show_timezone:"Show Time Zone",
            payment_mode:"Payment Mode",
            fee:"Register Fee",
            currency:"Currency",
            content:"Content / Notice",
            publish_status:"Publish Status",
            status:"Status",





            league:{
                "match_map":"Match Map",
                "online_streaming":"Online Stream",
            }
        },
    },
    'ja_JP':{
        ...jaLocale,
            public:{
                reset_ps:{
                must_fill:"必須",
                password_form:"数字とアルファベットを組み合わせて６文字以上で設定してください。",
                min_six:'わせ６文字以上で設定してください。',
                charactor:'数字とアルファベットを組み合わせ',
                new_ps:"新しいパスワードを入力してください",
                re_new_ps:"新しいパスワードをもう一度入力してください",
                reset_ps:"新しいパスワードを設定する",
                error_token:"このリンクは既に無効です。最新のリンクを使用してください。",
                connect_expired:"このリンクは有効期限が切れています。もう一度送信してください。",
                internet_error:"エラーが発生しました。カスタマーサービスセンターに連絡してください。",
                reset_success:"パスワードのリセットが完了しました。新しいパスワードでログインしてください。"
                },
            sign_up:{
            contact_mail : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Email : ",
            mail_placeholder : "Please enter contact Email",
            mail_pattern : "Email pattern",
            required : "Required",
            both_required : "<p style='color:#F56C6C;display:inline-block;'>*Region codes and contact phone both are Required</p>",
            name : "<p style='color:#F56C6C;display:inline-block'>*</p> Name : ",
            first_name : "First Name",
            last_name : "Last Name",
            first_name_placeholder : "Please enter first name",
            last_name_placeholder : "Please enter last name",
            identification_or_passport : "<p style='color:#F56C6C;display:inline-block'>*</p> Identification / Passport : ",
            id_pass_placeholder : "Please enter identification / passport",
            id_pass_description : "*If you do not have a citizenship in the Republic of China, please enter your passport number.",
            gender : "<p style='color:#F56C6C;display:inline-block'>*</p> Gender : ",
            male : "Male",
            female : "Female",
            birthdate : "<p style='color:#F56C6C;display:inline-block'>*</p> Birthdate : ",
            birthdate_placeholder : "Please enter Birthdate",
            contact_phone : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Phone : ",
            phone_placeholder : "Please enter contact phone",
            phone_codes : "Region Codes",
            phone_codes_placeholder : "Please select region codes",
            country: "<p style='color:#F56C6C;display:inline-block'>*</p> Country : ",
            country_placeholder : "Please select country",
            zip_code : "Zip Code : ",
            zip_code_placeholder : "Please enter zip code",
            address : "Contact Address : ",
            address_placeholder : "Please enter contact address",
            reset_form : "Reset",
            confirm : "Confirm",
            policy_checkbox : "I have read the registration notice and privacy policy confirmation.",
            not_match : "Only English or Number",
            thx_registration : "Thanks your Registration",
            submit_success_and_leave_page : "seconds will close this page...",
            expired_signup : "Registration has expired, thanks for your participation",
            error_message : "Please contact customer service<div style='color:A4A4A4;font-size:18px;'>customer service mail : cs@varlivetech.com</div>",
            }
        }
    },
    'zh_CN':{
        ...zhLocale,
        public:{
            reset_ps:{
                must_fill:"必填",
                password_form:"使用6个或更多字符，混合使用字母和数字，其中需包含1个数字跟1个英文字母",
                min_six:'請使用6个或更多字符',
                charactor:'需包含1个数字跟1个英文字母',
                new_ps:"输入您的新密码",
                re_new_ps:"再次输入您的新密码",
                reset_ps:"变更密码",
                error_token:"此连结已失效，请使用最新连结。",
                connect_expired:"此连结已过期，请重新申请。",
                internet_error:"发生错误，请联络客服人员。",
                reset_success:"密码重设成功，请使用新密码登入。"
            },
            sign_up:{
                contact_mail : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Email : ",
                mail_placeholder : "Please enter contact Email",
                mail_pattern : "Email pattern",
                required : "Required",
                both_required : "<p style='color:#F56C6C;display:inline-block;'>*Region codes and contact phone both are Required</p>",
                name : "<p style='color:#F56C6C;display:inline-block'>*</p> Name : ",
                first_name : "First Name",
                last_name : "Last Name",
                first_name_placeholder : "Please enter first name",
                last_name_placeholder : "Please enter last name",
                identification_or_passport : "<p style='color:#F56C6C;display:inline-block'>*</p> Identification / Passport : ",
                id_pass_placeholder : "Please enter identification / passport",
                id_pass_description : "*If you do not have a citizenship in the Republic of China, please enter your passport number.",
                gender : "<p style='color:#F56C6C;display:inline-block'>*</p> Gender : ",
                male : "Male",
                female : "Female",
                birthdate : "<p style='color:#F56C6C;display:inline-block'>*</p> Birthdate : ",
                birthdate_placeholder : "Please enter Birthdate",
                contact_phone : "<p style='color:#F56C6C;display:inline-block'>*</p> Contact Phone : ",
                phone_placeholder : "Please enter contact phone",
                phone_codes : "Region Codes",
                phone_codes_placeholder : "Please select region codes",
                country: "<p style='color:#F56C6C;display:inline-block'>*</p> Country : ",
                country_placeholder : "Please select country",
                zip_code : "Zip Code : ",
                zip_code_placeholder : "Please enter zip code",
                address : "Contact Address : ",
                address_placeholder : "Please enter contact address",
                reset_form : "Reset",
                confirm : "Confirm",
                policy_checkbox : "I have read the registration notice and privacy policy confirmation.",
                not_match : "Only English or Number",
                thx_registration : "Thanks your Registration",
                submit_success_and_leave_page : "seconds will close this page...",
                expired_signup : "Registration has expired, thanks for your participation",
                error_message : "Please contact customer service<div style='color:A4A4A4;font-size:18px;'>customer service mail : cs@varlivetech.com</div>",
            }
        }
    }
}
