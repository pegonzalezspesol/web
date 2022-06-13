/** @odoo-module **/

import {link, unlinkAll} from "@mail/model/model_field_command";
import {registerInstancePatchModel} from "@mail/model/model_core";

registerInstancePatchModel(
    "mail.chatter",
    "web_chatt_filtering/static/src/models/chatter/chatter.esm.js",
    {
        /**
         * @override
         */
        _created() {
            const _super = this._super();
            this.onKeydownSearchPartner = this.onKeydownSearchPartner.bind(this);
            return _super;
        },

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        /**
         * Handles keydown on 'Enter'.
         *
         * @param {KeyboardEvent} ev
         */
        onKeydownSearchPartner(ev) {
            if (ev.key === "Enter") {
                var $partner_search = $("#search_partner").val().trim();
                this.thread.cache.update({
                    messages: this.thread.cache._computeMessages(),
                });
                if ($partner_search) {
                    this._setFIlteredMessages($partner_search);
                }
            }
        },

        // ----------------------------------------------------------------------
        // Private
        // ----------------------------------------------------------------------

        /**
         * Loads this thread cache, by fetching the most recent messages in this
         * conversation.
         *
         * @private
         * @param {String} partner_search
         */
        _setFIlteredMessages(partner_search) {
            const messages = this.thread.cache.messages;
            this.thread.cache.update({messages: unlinkAll()});
            let busqueda = partner_search;
            var messages_filter = [];
            if (busqueda.charAt(0) === "-") {
                busqueda = busqueda.substring(1);
                const expresion = new RegExp(`${busqueda}.*`, "i");
                messages_filter = messages.filter((m) => !expresion.test(m.authorName));
            } else {
                const expresion = new RegExp(`${busqueda}.*`, "i");
                messages_filter = messages.filter(
                    (m) => expresion.test(m.authorName) || expresion.test(m.body)
                );
            }
            this.thread.cache.update({messages: link(messages_filter)});
        },
    }
);
